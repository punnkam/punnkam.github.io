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
                    currently building <a className={styles.grey} href="https://conduit.ai" target="_blank">conversational ai agents</a>. previously i worked on ai+ads at google, amms at a defi protocol, credit risk modeling at a bank, and execution systems at a trading firm.
                </p>
                <div>
                    {`i enjoy:`}
                    <ul>
                        <li>building startups</li>
                        <li>investing in my friends</li>
                        <li>learning history</li>
                        <li>playing poker</li>
                        <li>all things fast (f1, speedcubing, sprints, etc.)</li>
                    </ul>
                </div>


                <div className={styles.socialsContainer}>
                    <a className={styles.grey} href="mailto:punn.kamolyabutr@gmail.com">email</a>{"  //  "}
                    <a className={styles.grey} href="https://twitter.com/0xpunnk" target="_blank">twitter</a>

                </div>
                <p>reach out!</p>
            </div>
        </div>
    );
}
