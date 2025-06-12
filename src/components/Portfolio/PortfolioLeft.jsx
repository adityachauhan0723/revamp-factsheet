import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import style from './portfolio.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const round2Fixed = value => {
  return +(Math.round(value + 'e+2') + 'e-2');
};

const PortfolioLeft = ({ portfolioData, listId }) => {
  const performanceData = portfolioData?.[listId]?.performance || [];

  const labels = performanceData.map((entry) => new Date(entry.date).toLocaleDateString());

  const calculateDailyPercentChange = (data) => {
    let arr = [100];
    for (let i = 1; i < data.length; i++) {
      const previousValue = data[i - 1];
      const value = data[i];
      arr.push(arr[i - 1] + arr[i - 1] * round2Fixed((value - previousValue) / previousValue));
    }
    return arr;
  };

  const aifData = calculateDailyPercentChange(performanceData.map((entry) => entry.aif_cumulative));
  const niftyData = calculateDailyPercentChange(performanceData.map((entry) => entry.nifty_cumulative));

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'AIF',
        data: aifData,
        borderColor: '#DB2955',
        fill: false,
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: 'Nifty',
        data: niftyData,
        borderColor: '#605AA5',
        fill: false,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'AIF vs Nifty Daily Percent Change',
        font: {
          size: 24, // Increase font size for title
        },
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: (context) => `${context.parsed.y.toFixed(2)}%`,
        },
        titleFont: {
          size: 16, // Larger font size for tooltip title
        },
        bodyFont: {
          size: 14, // Larger font size for tooltip body
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          font: {
            size: 18, // Increase font size for x-axis label
          },
        },
        ticks: {
          font: {
            size: 14, // Increase font size for x-axis ticks
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percent Change (%)',
          font: {
            size: 18, // Increase font size for y-axis label
          },
        },
        ticks: {
          font: {
            size: 14, // Increase font size for y-axis ticks
          },
        },
      },
    },
  };

  return (
    <div className={style.portfolioLeft}>
      <div className={style.leftContent}>
        <div className={style.pieChart}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioLeft;
