import NavBar from "./navbar";
import styles from "../../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.layout}>
        <NavBar />
        <main>{children}</main>
      </div>
    </>
  );
}
