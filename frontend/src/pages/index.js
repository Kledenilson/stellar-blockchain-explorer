import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Stats from '../components/Stats';
import LatestBlocks from '../components/LatestBlocks';
import LatestTransactions from '../components/LatestTransactions';
import styles from '../styles/Home.module.css';

// const fetchBlock = async () => {
//     try {
//       const response = await fetch(`/api/block/${blockNumber}`);
//       const data = await response.json();
//       setResult(JSON.stringify(data, null, 2));
//     } catch (error) {
//       setResult(`Error fetching block: ${error.message}`);
//     }
// };

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Satoshinators - Stellar Blockchain Explorer</title>
        <meta name="description" content="A blockchain explorer and analytics platform for Stellar network." />
      </Head>

      <Header />

      <main className={styles.main}>
        <Image src="/satoshinators-logo.png" alt="Explorer Logo" width={200} height={200} />       
        <h2>BLOCKCHAIN EXPLORER</h2>
        <p className={styles.description}>
          A blockchain explorer and analytics platform for various smart chain. Enabling users to explore blocks, transactions and addresses on supported networks.
        </p>

        <SearchBar />

        <Stats />

        <LatestBlocks />

        <LatestTransactions />
      </main>
    </div>
  );
}