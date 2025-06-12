import React from 'react';
import style from './risk.module.scss';
import { GoDotFill } from 'react-icons/go';
import { Table } from 'react-bootstrap';

const round2Fixed = value => {
  return +(Math.round(value + 'e+2') + 'e-2');
};

const RiskTable = ({ portfolioData, listId }) => {
  const portfolioReturns = portfolioData?.[listId]?.portfolio_returns || {};
  const benchmarkReturns = portfolioData?.[listId]?.benchmark_returns || {};

  return (
    <div className={style.riskRight}>
      <Table borderless hover size="sm">
        <thead className={style.riskTableHeading}>
          <tr>
            <th>Trailing Returns %</th>
            <th></th>
            <th>Quarterly Returns %</th>
            <th style={{ padding: '10px',}}>Q1</th>
            <th style={{ padding: '10px',}}>Q2</th>
            <th style={{ padding: '10px',}}>Q3</th>
            <th style={{ padding: '10px',}}>Q4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontSize: '1.1em'}}>3 months</td>
            <td className={style.returnElement}>
              <GoDotFill style={{ color: '#DB2955' }} />{' '}
              {round2Fixed(portfolioReturns['3_m_trailing'] * 100)} %
              <hr />
              <GoDotFill style={{ color: '#605AA5' }} />{' '}
              {round2Fixed(benchmarkReturns['3_m_trailing'] * 100)} %
            </td>
            <td style={{ fontSize: '1.1em',padding: '10px',}}>2025 (YTD)</td>
            <td style={{ fontSize: '1.1em'}}>
              {portfolioReturns.yearly?.[2025]?.q1 != null
                ? `${round2Fixed(portfolioReturns.yearly[2025].q1 * 100)}%`
                : '-'}
            </td>
            <td style={{ fontSize: '1.1em',padding: '10px',}}>
              {portfolioReturns.yearly?.[2025]?.q2 != null
                ? `${round2Fixed(portfolioReturns.yearly[2025].q2 * 100)}%`
                : '-'}
            </td>
            <td style={{ fontSize: '1.1em',padding: '10px',}}>
              {portfolioReturns.yearly?.[2025]?.q3 != null
                ? `${round2Fixed(portfolioReturns.yearly[2025].q3 * 100)}%`
                : '-'}
            </td>
            <td style={{ fontSize: '1.1em',padding: '10px',}}>
              {portfolioReturns.yearly?.[2025]?.q4 != null
                ? `${round2Fixed(portfolioReturns.yearly[2025].q4 * 100)}%`
                : '-'}
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.1em'}}>6 months</td>
            <td className={style.returnElement}>
              <GoDotFill style={{ color: '#DB2955' }} />{' '}
              {round2Fixed(portfolioReturns['6_m_trailing'] * 100)} %
              <hr />
              <GoDotFill style={{ color: '#605AA5' }} />{' '}
              {round2Fixed(benchmarkReturns['6_m_trailing'] * 100)} %
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.1em'}}>1 year</td>
            <td className={style.returnElement}>
              <GoDotFill style={{ color: '#DB2955' }} />{' '}
              {round2Fixed(portfolioReturns['1_y_trailing'] * 100)} %
              <hr />
              <GoDotFill style={{ color: '#605AA5' }} />{' '}
              {round2Fixed(benchmarkReturns['1_y_trailing'] * 100)} %
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style={{ fontSize: '1.1em'}}>5 Year Annualised</td>
            <td className={style.returnElement}>
              <GoDotFill style={{ color: '#DB2955' }} />{' '}
              {round2Fixed(portfolioReturns['5_y_trailing'] * 100)} %
              <hr />
              <GoDotFill style={{ color: '#605AA5' }} />{' '}
              {round2Fixed(benchmarkReturns['5_y_trailing'] * 100)} %
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default RiskTable;