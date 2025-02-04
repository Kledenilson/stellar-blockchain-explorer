import 'chart.js/auto';
import styles from '../styles/Stats.module.css';
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const Stats = () => {
  const data = {
    labels: ['Aug 30', 'Sep 6', 'Sep 13'],
    datasets: [
      {
        label: 'Transaction History in Past 14 Days',
        data: [1750, 1750, 1750],
        fill: false,
        borderColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        type: 'linear', // Explicitly set the scale type
      },
    },
  };

  return (
    <div className={styles.stats}>
      <div className={styles.statItem}>
        <h3>XLM Price</h3>
        <p>$1630.91</p>
        <small>@ 0.061301 BTC</small>
      </div>
      <div className={styles.statItem}>
        <h3>Latest Block</h3>
        <p>31742608</p>
        <small>[3.0s]</small>
      </div>
      <div className={styles.statItem}>
        <h3>Active Validators</h3>
        <p>17</p>
      </div>
      <div className={styles.statItem}>
        <h3>Transaction History in Past 14 Days</h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Stats;