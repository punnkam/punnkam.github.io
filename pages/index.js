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
                    {`I'm currently at Google. Previously, I built Host.AI to automate 
                    guest communication in the hospitality industry. I also worked on AMMs at Euler Labs, and built a waveglider to study ocean storms at the Scripps' Institute.`}
                </p>
                <div>
                    {`Areas of interest:`}
                    <ul>
                        <li>Unsexy startups</li>
                        <li>Crypto</li>
                        <li>Housing</li>
                        <li>Trade</li>
                        <li>Speed</li>
                    </ul>
                </div>
                <div>
                    {`I'd like to write more.`}
                </div>


                <div className={styles.socialsContainer}>
                    <a className={styles.socials} href="mailto: me@punnkam.com">me@punnkam.com</a>{"  //  "}
                    <a className={styles.socials} href="https://twitter.com/0xpunnk">0xpunnk</a>

                </div>
                <p>Feel free to reach out!</p>
            </div>
        </div>
    );
}
