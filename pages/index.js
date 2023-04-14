import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="Punn Kam's About Page" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <div className={styles.main}>
                <p>
                    I&apos;m studying Computer Science at UC San Diego.
                    Previously I worked on backend infra for Search and Ads at
                    Google, the Scripps lab, and several fintech companies.
                    I&apos;m especially interested in startups, economics, LLMs,
                    and crypto.
                </p>

                {/* <div>
                    In 2021, I started{" "}
                    <a href="https://twitter.com/BlockchainAtSd">
                        Blockchain at San Diego
                    </a>
                    , a community of 600+ builders, researchers, and investors.
                </div> */}

                <p>Feel free to reach out!</p>
                <div className={styles.socials}>
                    <a href="mailto: punn.kamolyabutr@gmail.com">Email</a> —{" "}
                    <a href="https://twitter.com/0xpunnk">Twitter</a> —{" "}
                    <a href="https://linkedin.com/in/punnkam">LinkedIn</a>
                </div>
            </div>
        </div>
    );
}
