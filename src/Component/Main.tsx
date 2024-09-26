import styles from "./main.module.css";
import Profile from "./Profile";
import Skill from "./Skill";

export default function Main() {
  return (
    <div className={styles.main}>
      <h1>👋학생 개발자 이영민입니다.</h1>
      <hr />
      <Skill />
      <Profile />
    </div>
  );
}
