import Head from "next/head";
import styles from "../../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alfa</title>
        <meta name="description" content="Secret alfa for those who seek" />
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <main className={styles.main}>
        <code className={styles.code}>Soon.</code>
      </main>
    </div>
  );
}
