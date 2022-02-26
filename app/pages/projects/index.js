import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Punn Kam's Projects" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Projects</h1> */}
        {/* <code className={styles.code}>pages/index.js</code> */}

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Agora (In Progress)</h2>
            <p>
              Decentralized marketplace for digital and physical goods commerce.
            </p>
            <div className={styles.technologies}>
              Solidity, React, Express, Moralis
            </div>
            <p className={styles.technologies}></p>
          </a>

          <a
            href="https://chain-champions.herokuapp.com/"
            className={styles.card}
          >
            <h2>Ethereum Game</h2>
            <p>
              Infinite multi-player battle royale game on Ethereum fought by
              NFTs.
            </p>
            <div className={styles.technologies}>Solidity, Next, IPFS</div>
          </a>
          <a
            href="https://afternoon-caverns-07461.herokuapp.com/"
            className={styles.card}
          >
            <h2>Home-Service Market </h2>
            <p>
              Platform to improve lead generation for home-service businesses.
            </p>
            <div className={styles.technologies}>
              React, Redux, Express, MongoDB
            </div>
          </a>

          <a href="https://github.com/punnkam/auto-arb" className={styles.card}>
            <h2>Crypto Arbitrage Bot</h2>
            <p>
              Trading bot arbitraging the futures premium on CEX perpetual
              swaps.
            </p>
            <div className={styles.technologies}>
              Python, Pandas, Numpy, Backtrader
            </div>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
