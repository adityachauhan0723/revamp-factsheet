import React from 'react';
import style from './holdings.module.scss';

const round2Fixed = value => {
  return +(Math.round(value + 'e+2') + 'e-2');
};

const HoldingsLeft = ({ portfolioData, listId, pdfType }) => {
  const TopHoldings = portfolioData?.[listId]?.top_holdings || [];
  const TopHoldingWeight = portfolioData?.[listId]?.top_holding_weight || 0;

  return (
    <div className={pdfType === "orbis" ? style.holdingsLeft1 : style.holdingsLeft}>
      <div className={style.holdingHeader}>
        <h5>Top Holdings</h5>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* <span style={{ flex: '0 0 80%' }}>Holding Name</span> */}
          {/* <span style={{ textAlign: 'center', flex: '0 0 30%' }}>%</span> */}
        </div>
      </div>
      <div className={style.holdingTable}>
        {TopHoldings.map((holding, index) => (
          <div className={pdfType === "orbis" ? style.holdingTableRow1 : style.holdingTableRow} key={index}>
            <div className={style.iconContainer}>
              <img
                src={`/Images/Ticker/${holding.ticker}.png`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/Images/Ticker/holdingdefault.png';
                }}
                alt={holding.name}
              />
              {(pdfType === "orbis" || pdfType === "geojit") && <div>{holding.name}</div>}
            </div>
            {pdfType !== "orbis" && pdfType !== "geojit" && <div>{holding.name}</div>}
            <div>{round2Fixed(holding.weight * 100)}%</div>
          </div>
        ))}
      </div>
      <div className={style.holdingTableRow2}>
        <div>Assets in Top 10 Holdings %</div>
        <div>{round2Fixed(TopHoldingWeight * 100)}%</div>
      </div>
      {pdfType === "orbis" && (
        <>
          <div className={style.holdingTableRow2}>
            <div>Cash Remaining</div>
            <div>
              {portfolioData?.[listId]?.cash_remaining?.toLocaleString('en-IN', {
                maximumFractionDigits: 2,
                style: 'currency',
                currency: 'INR'
              }) || 'N/A'}
            </div>
          </div>
          <div className={style.holdingTableRow2}>
            <div>Total Portfolio Value</div>
            <div>
              {portfolioData?.[listId]?.value?.toLocaleString('en-IN', {
                maximumFractionDigits: 2,
                style: 'currency',
                currency: 'INR'
              }) || 'N/A'}
            </div>
          </div>
        </>
      )}
      <div className={style.holdingTableRow2}>
        <div>Number of Equity Holdings</div>
        <div>{portfolioData?.[listId]?.no_equity_holdings || 0}</div>
      </div>
      <div className={style.holdingTableRow2}>
        <div>Number of Bond Holdings</div>
        <div>0</div>
      </div>
    </div>
  );
};

export default HoldingsLeft;