import styles from '../styles/LatestBlocks.module.css';

const LatestBlocks = () => {
  return (
    <div className={styles.latestBlocks}>
      <h2>The latest 5 Blocks</h2>
      <table>
        <thead>
          <tr>
            <th>Block</th>
            <th>Validated</th>
            <th>Block Reward</th>
          </tr>
        </thead>
        <tbody>
          {/* Adicionar linhas de dados conforme necessário */}
        </tbody>
      </table>
      <button className={styles.button}>View All Blocks</button>
    </div>
  );
};

export default LatestBlocks;