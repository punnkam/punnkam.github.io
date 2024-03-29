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
                    <a href="https://promptguessr.app/" className={styles.card}>
                        <h2>PromptGuessr</h2>
                        <p>
                            GeoGuessr for AI-generated images.
                        </p>
                        <div className={styles.technologies}>
                            Next, Firebase
                        </div>
                        <p className={styles.technologies}></p>
                    </a>
                    <a
                        href="https://triton-spanner.streamlit.app/"
                        className={styles.card}
                    >
                        <h2>Triton Course Search</h2>
                        <p>
                            Semantic search of UCSD courses using MiniBERT
                            pre-trained encoders.
                        </p>
                        <div className={styles.technologies}>
                            Python, Pinecone
                        </div>
                        <p className={styles.technologies}></p>
                    </a>
                    <a
                        href="https://github.com/prmali/portifi-ethsf"
                        className={styles.card}
                    >
                        <h2>Portifi</h2>
                        <p>
                            Active portfolio manager running an automated
                            trading strategy - ETHSF.
                        </p>
                        <div className={styles.technologies}>
                            Solidity, React, Lambda, EC2
                        </div>
                        <p className={styles.technologies}></p>
                    </a>
                    <a
                        href="https://afternoon-caverns-07461.herokuapp.com/"
                        className={styles.card}
                    >
                        <h2>Home-Service Market </h2>
                        <p>
                            Platform to improve lead generation for home-service
                            businesses.
                        </p>
                        <div className={styles.technologies}>
                            React, Redux, Express, MongoDB
                        </div>
                    </a>
                    <a
                        href="https://bound-eight.vercel.app/"
                        className={styles.card}
                    >
                        <h2>Bound</h2>
                        <p>
                            Gamified NFT subscriptions for crypto native brands
                            and communities.
                        </p>
                        <div className={styles.technologies}>
                            Solidity, Next, Express
                        </div>
                        <p className={styles.technologies}></p>
                    </a>

                    <a
                        href="https://github.com/punnkam/auto-arb"
                        className={styles.card}
                    >
                        <h2>Crypto Arbitrage Bot</h2>
                        <p>
                            Trading bot arbitraging the futures premium on CEX
                            perpetual swaps.
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
