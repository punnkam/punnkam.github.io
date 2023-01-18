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
          I&apos;m studying Computer Science at UC San Diego and currently
          building at{" "}
          <a className={styles.intext} href="https://twitter.com/eulerfinance">
            Euler Labs
          </a>
          . Previously I worked on software engineering at Google, the Scripps
          lab, and several fintech companies. I&apos;m especially interested in
          startups, economics, and crypto.
        </p>

        <div>
          Last summer, I started Blockchain at San Diego, a community of 500+
          builders, researchers, and investors.
        </div>

        <p>Feel free to reach out!</p>
        <div className={styles.socials}>
          <a href="mailto: punn.kamolyabutr@gmail.com">Email</a> —{" "}
          <a href="https://twitter.com/xpunnk">Twitter</a> —{" "}
          <a href="https://linkedin.com/in/punnkam">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
