import React from "react";
import InvestmentObjective from "./InvestmentObjective";
import Performance from "./Performance";
import style from "./investment.module.scss";

const Investment = ({ portfolioData, listId, pdfType }) => {
  return (
    <div className={style.investment}>
      <InvestmentObjective portfolioData={portfolioData} listId={listId} pdfType={pdfType} />
      <Performance portfolioData={portfolioData} listId={listId} />
    </div>
  );
};

export default Investment;