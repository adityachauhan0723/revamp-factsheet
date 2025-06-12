import React from 'react';
import { format } from 'date-fns';
import style from './portfolio.module.scss';
import PortfolioRight from './PortfolioRight';
import PortfolioLeft from './PortfolioLeft';
import EquityStyleBox from '../EquityStyleBox/EquityStyleBox';

const Portfolio = ({ portfolioData, listId, pdfType }) => {
  const date = format(new Date(), 'dd/MM/yyyy');
  return (
    <div className={style.portfolio}>
      <div className={style.portfolioHeading}>
        Portfolio{' '}
        <span style={{ fontWeight: '400', paddingLeft: '.5em' }}> {date}</span>
      </div>
      <div className={style.portfolioContent}>
        <PortfolioLeft portfolioData={portfolioData} listId={listId} pdfType={pdfType} />
        <EquityStyleBox portfolioData={portfolioData} listId={listId}/>
        <PortfolioRight portfolioData={portfolioData} listId={listId} pdfType={pdfType} />
      </div>
    </div>
  );
};

export default Portfolio;