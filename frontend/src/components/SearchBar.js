import styles from '../styles/SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search Token / Blocks / Transactions / Address" />
      <select>
        <option value="XLM">XLM</option>
        {/* Adicionar outras opções conforme necessário */}
      </select>
    </div>
  );
};

export default SearchBar;