import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/satoshinators-logo.png" alt="Explorer Logo" width={30} height={30} />
        <span>EXPLORER</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/transactions">Transactions</Link></li>
          <li><Link href="/blocks">Blocks</Link></li>
        </ul>
      </nav>
      <div className={styles.themeSwitch}>
        {/* Implementar switch de tema aqui */}
      </div>
    </header>
  );
};

export default Header;