import Header from "@/Component/Header";
import styles from "./page.module.css";
import Main from "@/Component/Main";

export default function Home() {
  return (
    <div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.start}>
        <Main />
      </div>
    </div>
  );
}
