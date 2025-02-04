import styles from '../styles/LatestTransactions.module.css';

const LatestTransactions = () => {
  return (
    <div className={styles.latestTransactions}>
      <h2>The latest 5 Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Txn Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {/* Adicionar linhas de dados conforme necessário */}
        </tbody>
      </table>
      <button className={styles.button}>View All Transactions</button>
    </div>
  );
};

export default LatestTransactions;