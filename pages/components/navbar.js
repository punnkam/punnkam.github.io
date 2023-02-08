import styles from "../../styles/Layout.module.css";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <img
                            src="/logo.jpg"
                            alt="Logo"
                            width={80}
                            height={80}
                        />
                    </a>
                </Link>
            </div>
            <div className={styles.linkbox}>
                <hr className={styles.hrw} />
                <div className={styles.links}>
                    <div className={styles.sublinks}>
                        <Link href="/">
                            <a>About</a>
                        </Link>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                    </div>
                    <hr className={styles.hrh} />
                    <div className={styles.sublinks}>
                        <a href="https://github.com/punnkam">Github</a>
                        <a href="https://drive.google.com/file/d/1IyY-ukAKj0eJ6ow6KHuDMcBFeiRpkgs7/view?usp=sharing">
                            Resume
                        </a>
                    </div>
                    <hr className={styles.hrh} />
                    <div className={styles.sublinks}>
                        <Link href="/writing">
                            <a>Writing</a>
                        </Link>
                        <Link href="/other">
                            <a>α</a>
                        </Link>
                    </div>
                </div>
                <hr className={styles.hrw} />
            </div>
        </div>
    );
}
