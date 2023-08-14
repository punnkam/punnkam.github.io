import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

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
                    guest communication in the hospitality industry. I also worked on AMMs at a defi protocol, modeled credit defaults at a commercial bank, and built execution systems at a trading firm.`}
                </p>
                <div>
                    {`Areas of interest:`}
                    <ul>
                        <li>Unsexy startups</li>
                        <li>Economics</li>
                        <li>Crypto</li>
                        <li>Land</li>
                        <li>Speed</li>
                    </ul>
                </div>
                <div>
                    {"I'd like to "}<span className={styles.grey}><Link href="/posts" passHref={true} styles={styles.grey}>write</Link></span> {" more."}
                </div>


                <div className={styles.socialsContainer}>
                    <a className={styles.grey} href="mailto: me@punnkam.com">me@punnkam.com</a>{"  //  "}
                    <a className={styles.grey} href="https://twitter.com/0xpunnk">0xpunnk</a>

                </div>
                <p>Feel free to reach out!</p>
            </div>
        </div>
    );
}
