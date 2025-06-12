import React, { createContext, useContext, useState } from "react";

// 1. Create context
const PdfContext = createContext();

// 2. Provider component
export const PdfProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [pdfType, setPdfType] = useState("Full");

  return (
    <PdfContext.Provider
      value={{ portfolioData, setPortfolioData, pdfType, setPdfType }}
    >
      {children}
    </PdfContext.Provider>
  );
};

// 3. Custom hook for ease of use
export const usePdfContext = () => useContext(PdfContext);
