import Head from "next/head";
import Image from "next/image";
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
          I'm a software engineer at the Scripps Institute of Oceannography
          building an autonomous ocean research device. I'm also interested in
          startups, statistics, economics, and crypto.
        </p>

        <div>
          Last summer, I founded Blockchain at San Diego, a community of 300+
          blockchain engineers, researchers, and enthusiasts at UC San Diego.
        </div>

        <p>Feel free to reach out!</p>
        <div className={styles.socials}>
          <a href="mailto: punn.kamolyabutr@gmail.com">Email</a> —{" "}
          <a href="https://twitter.com/punnkam">Twitter</a> —{" "}
          <a href="https://linkedin.com/in/punnkam">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
