import React from 'react';
import style from './holdings.module.scss';

const round2Fixed = value => {
  return +(Math.round(value + 'e+2') + 'e-2');
};

const HoldingsRight = ({ portfolioData, listId, pdfType }) => {
  const TopSectors = portfolioData?.[listId]?.top_sectors || [];

  return (
    <div className={pdfType === "orbis" ? style.holdingsRight1 : style.holdingsRight}>
      <div
        className={style.holdingHeader}
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h5>Stock Sector Weightings %</h5>
        <h5>Fund</h5>
      </div>
      <div className={style.holdingTable} style={{ border: 'none' }}>
        {TopSectors.map((sector, index) => (
          <div className={style.holdingTableRow} key={index}>
            <div className={style.iconContainer}>
              <img
                src={`/Images/Sector/${sector.sector_id}.png`}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/Images/Sector/sectordefault.png';
                }}
                alt={sector.industry}
              />
            </div>
            <div>{sector.industry}</div>
            <div>{round2Fixed(sector.weight * 100)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoldingsRight;