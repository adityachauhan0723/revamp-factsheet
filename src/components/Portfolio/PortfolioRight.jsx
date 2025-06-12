import React from 'react';
import style from './portfolio.module.scss';
import { Table } from 'react-bootstrap';
// import EquityStyleBox from '../EquityStyleBox/EquityStyleBox';

const round2Fixed = value => {
  return +(Math.round(value + 'e+2') + 'e-2');
};

const PortfolioRight = ({ portfolioData, listId }) => {
const capDistribution = portfolioData?.[listId]?.cap_distribution || {};

  return (
    <div className={style.portfolioRight}>
      {/* <EquityStyleBox/> */}
      <Table
        borderless
        size='sm'
        style={{ width: '50%', marginBottom: '0', height: '200px' }}
      >
      
        <tbody>
          <tr>
            <td>Large</td>
            <td>{round2Fixed(capDistribution.large * 100)} %</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>{round2Fixed(capDistribution.medium * 100)} %</td>
          </tr>
          <tr>
            <td>Small</td>
            <td>{round2Fixed(capDistribution.small * 100)} %</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PortfolioRight;


