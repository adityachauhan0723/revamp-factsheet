import { useEffect, useRef, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { fetchFactSheetData } from "../redux/actions/factsheetActions";
import Header from "../components/Header/Header";
import Investment from "../components/Investment/Investment";
import Risk from "../components/Risk/Risk";
import Portfolio from "../components/Portfolio/Portfolio";
import Holdings from "../components/Holdings/Holdings";
import Footer from "../components/Footer/Footer";
import ModernLoader from "../components/Loader/ModernLoader";
import "../styles/global.scss";

const FactSheet = () => {
  const { name, token, userId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const pdfRef = useRef();
  const [countdown, setCountdown] = useState(null);

  const [productId, setProductId] = useState(null);

  const { data: portfolioData, loading, error } = useSelector(
    (state) => state.factsheet
  );

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const redirectUrl = query.get("redirectUrl");
    const isModal = query.get("isModal") === "true";
    const parsedProductId = query.get("productId");

    setProductId(parsedProductId);

    if (redirectUrl) localStorage.setItem("redirectUrl", redirectUrl);
    if (name) localStorage.setItem("userName", decodeURIComponent(name));

    if (token && userId && parsedProductId) {
      dispatch(fetchFactSheetData(token, userId, parsedProductId, isModal));
    }
  }, [dispatch, location, name, token, userId]);

  useEffect(() => {
    if (portfolioData && pdfRef.current) {
      // Delay PDF generation to let charts stabilize
      const timeout = setTimeout(() => {
        generatePDF();
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [portfolioData]);
  useEffect(() => {
  if (portfolioData && pdfRef.current) {
    let countdownValue = 10;
    setCountdown(countdownValue);

    const countdownInterval = setInterval(() => {
      countdownValue -= 1;
      setCountdown(countdownValue);

      if (countdownValue <= 0) {
        clearInterval(countdownInterval);
        setCountdown(null); // Hide the countdown
        generatePDF(); // Generate the PDF
      }
    }, 1000); // Every 1 second

    return () => clearInterval(countdownInterval);
  }
}, [portfolioData]);


const generatePDF = async () => {
  const input = pdfRef.current;
  if (!input) return;

  // Capture the content as a canvas
  const canvas = await html2canvas(input, {
    scale: 1, // Keep the scale at 1 for high resolution
    useCORS: true,
    scrollX: 0,
    scrollY: 0,
    windowWidth: input.scrollWidth,
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  // Define margins (in mm)
  const marginX = 10;
  const marginY = 10;

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const contentWidth = pageWidth - 2 * marginX;
  const contentHeight = pageHeight - 2 * marginY;

  const imgProps = pdf.getImageProperties(imgData);

  // Initial image width based on content width
  let imgWidth = contentWidth;
  let imgHeight = (imgProps.height * imgWidth) / imgProps.width;

  // If the image is taller than the page, scale it down proportionally
  if (imgHeight > contentHeight) {
    const scaleFactor = contentHeight / imgHeight;
    imgWidth = imgWidth * scaleFactor;
    imgHeight = imgHeight * scaleFactor;
  }

  // Center the content horizontally
  const centerX = (pageWidth - imgWidth) / 2;

  let heightLeft = imgHeight;
  let position = marginY;

  // Add the image (this will be the first page)
  pdf.addImage(imgData, "PNG", centerX, position, imgWidth, imgHeight);
  heightLeft -= contentHeight;

  // If the content overflows, add additional pages
  while (heightLeft > 0) {
    pdf.addPage();
    position = marginY - (imgHeight - heightLeft);
    pdf.addImage(imgData, "PNG", centerX, position, imgWidth, imgHeight);
    heightLeft -= contentHeight;
  }

  // Save the PDF with a dynamic name
  pdf.save(`Factsheet_Lotusdew_${Date.now()}.pdf`);
};


  if (loading) return <ModernLoader />;
  if (error) return <div className="text-red-600">Error: {error}</div>;

return (
  <>
    {portfolioData ? (
      <>
        {countdown !== null && (
          <div className="countdown-message">
            Download starts automatically in {countdown}...
          </div>
        )}
        <div ref={pdfRef} className="pdf">
          <div className="pdf-container">
            <Header pdfType="default" />
            <Investment portfolioData={portfolioData} listId={productId} pdfType="default" />
            <Risk portfolioData={portfolioData} listId={productId} />
            <Portfolio portfolioData={portfolioData} listId={productId} pdfType="default" />
            <Holdings portfolioData={portfolioData} listId={productId} pdfType="default" />
            <Footer portfolioData={portfolioData} listId={productId} pdfType="default" />
          </div>
        </div>
      </>
    ) : (
      <p>No data available</p>
    )}
  </>
);

};

export default FactSheet;
