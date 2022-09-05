import Head from "next/head";
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
        <div className={styles.grid}>
        <a href="" className={styles.card}>
            <h2>Medici Finance [WIP]</h2>
            <p>
              Uncollateralized lending platform with credit scoring and identity proofs. 
            </p>
            <div className={styles.technologies}>
              Solidity, more...
            </div>
            <p className={styles.technologies}></p>
          </a>
        <a href="https://bound-eight.vercel.app/" className={styles.card}>
            <h2>Bound</h2>
            <p>
              Gamified NFT subscriptions for crypto native brands and communities.
            </p>
            <div className={styles.technologies}>
              Solidity, Next, Express
            </div>
            <p className={styles.technologies}></p>
          </a>
          <a href="https://github.com/agora-eco" className={styles.card}>
            <h2>Agora</h2>
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
            <h2>On-chain Game</h2>
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
    </div>
  );
}
