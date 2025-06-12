import React from 'react';
import style from './holdings.module.scss';
import HoldingsLeft from './HoldingsLeft';
import HoldingsRight from './HoldingsRight';

const Holdings = ({ portfolioData, listId, pdfType }) => {
  return (
    <div className={style.holdings}>
      <HoldingsLeft portfolioData={portfolioData} listId={listId} pdfType={pdfType} />
      <HoldingsRight portfolioData={portfolioData} listId={listId} pdfType={pdfType} />
    </div>
  );
};

export default Holdings;