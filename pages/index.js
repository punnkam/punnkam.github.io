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
                    currently building <a className={styles.grey} href="https://conduit.app" target="_blank">ai agents for the built world</a>. previously i worked on ai/ads at google, amms at a defi protocol, consumer credit risk modeling at a bank, and execution systems at a trading firm.
                </p>
                <div>
                    {`i enjoy:`}
                    <ul>
                        <li>startups</li>
                        <li>economics</li>
                        <li>real-estate</li>
                        <li>anything really fast</li>
                    </ul>
                </div>
                <div>
                    {"I'd like to "}<span className={styles.grey}><Link href="/posts" passHref={true} styles={styles.grey}>write</Link></span> {" more."}
                </div>


                <div className={styles.socialsContainer}>
                    <a className={styles.grey} href="mailto:punn.kamolyabutr@gmail.com">email</a>{"  //  "}
                    <a className={styles.grey} href="https://twitter.com/0xpunnk" target="_blank">twitter</a>

                </div>
                <p>would love to get to know you!</p>
            </div>
        </div>
    );
}
