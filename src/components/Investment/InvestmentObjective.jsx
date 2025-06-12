import React from 'react';
import style from './investment.module.scss';

const InvestmentObjective = ({ portfolioData, listId, pdfType }) => {
  return (
    <div className={style.investmentObj}>
      <div className={style.investmentObjHeading}>
        <div className={style.topHeading}>
          <h5>Category</h5>
          <span>
            {portfolioData?.[listId]?.cap_distribution?.small > 0 ? "Small Cap" : "Mixed"}
          </span>
        </div>
      </div>
      <div className={style.mainHeading}>Investment Objective</div>
      <div className={style.para}>
        {pdfType === "default" ? "Trilithon Hidden Gems Scheme" : "Trilithon Hidden Gems Scheme"} invests in a mix of microcap stocks in NSE, BSE X-Shares, and SME Stocks. The stocks are screened on corporate governance and consistency of business models. After carefully evaluating the shortlisted stocks, the AIF invests in a portfolio of about 30 stocks for the long term to take advantage of micro-monopoly business models and potential price acceleration on future demand of the shares. The investments are always in listed shares and might occasionally invest in special primary anchor opportunities.
      </div>
    </div>
  );
};

export default InvestmentObjective;