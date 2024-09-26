import Height from "./Height";
import styles from "./main.module.css";
import Profile from "./Profile";
import Queue from "./Queue";
import Skill from "./Skill";

export default function Main() {
  return (
    <div className={styles.main}>
      <h1>👋학생 개발자 이영민입니다.</h1>
      <hr />
      <Queue />
      <Profile />
      <Skill />
      <Height />

      <hr />
      <h1>dd</h1>
    </div>
  );
}
