import React from 'react';
import style from './risk.module.scss';
import RiskTable from './RiskTable';
import { GoDotFill } from 'react-icons/go';

const round2Fixed = (value) => {
  if (typeof value !== 'number' || isNaN(value)) return '-';
  return +(Math.round(value + 'e+2') + 'e-2');
};

const Risk = ({ portfolioData, listId }) => {
  const portfolioReturns = portfolioData?.[listId]?.portfolio_returns || {};
  const benchmarkReturns = portfolioData?.[listId]?.benchmark_returns || {};

  // Helper render for each row
  const renderRow = (label, portfolioValue, benchmarkValue) => (
    <div className={style.riskRow} key={label}>
      <span className={style.label}>{label}</span>
      <div className={style.returnElement}>
        <GoDotFill style={{ color: '#DB2955', marginRight: 6 }} aria-label="Lotusdew" />
        <span className={style.value}>{portfolioValue !== '-' ? `${portfolioValue} %` : '-'}</span>
        <hr className={style.divider} />
        <GoDotFill style={{ color: '#605AA5', marginRight: 6 }} aria-label="Benchmark" />
        <span className={style.value}>{benchmarkValue !== '-' ? `${benchmarkValue} %` : '-'}</span>
      </div>
    </div>
  );

  return (
    <div className={style.risk}>
      <div className={style.riskLeft}>
        <h2 className={style.mainHeading}>Risk Returns</h2>

        {renderRow('Total Return', round2Fixed(portfolioReturns.total_return * 100), round2Fixed(benchmarkReturns.total_return * 100))}
        {renderRow('CAGR', round2Fixed(portfolioReturns.cagr * 100), round2Fixed(benchmarkReturns.cagr * 100))}
        {renderRow('Max Drawdown', round2Fixed(portfolioReturns.max_drawdown * 100), round2Fixed(benchmarkReturns.max_drawdown * 100))}

        <div className={style.riskFooter}>
          <span>
            <GoDotFill style={{ color: '#DB2955', marginRight: 6 }} />
            Lotusdew
          </span>
          <span>
            <GoDotFill style={{ color: '#605AA5', marginRight: 6 }} />
            Nifty Smallcap 100
          </span>
        </div>
      </div>

      <RiskTable portfolioData={portfolioData} listId={listId} />
    </div>
  );
};

export default Risk;
