import React from 'react';
import { BiTachometer } from 'react-icons/bi';
import style from './investment.module.scss';
import BarChart from './BarChart';

const Performance = ({ portfolioData, listId }) => {
  return (
    <div className={style.performance}>
      <div className={style.performanceHeading}>
        <div className={style.topHeading}>
          <h5>Benchmark</h5>
          <span>Nifty Smallcap 100</span>
        </div>
        <div className={style.topHeading}>
          <h5>Risk Category</h5>
          <span>
            <BiTachometer style={{ fontSize: '1.5em' }} /> High
          </span>
        </div>
      </div>
      <div className={style.mainHeading}>Performance</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ flex: '0.5 0.5 50%', minWidth: '200px' }}>
          <BarChart portfolioData={portfolioData} listId={listId} />
        </div>
    
      </div>
    </div>
  );
};

export default Performance;