import styles from "./main.module.css";
import Skill from "./Skill";
import Profile from "./Profile/profile.png";
import Image from "next/image";
import "./Profile/profile.css";

export default function Main() {
  return (
    <div className={styles.main}>
      <h1>👋학생 개발자 이영민입니다.</h1>
      <hr />
      <Skill />
      <div className={styles.profile}>
        <table>
          <tbody>
            <tr>
              <td colSpan={2}>
                <Image src={Profile} alt="myPic" width={400} height={500} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>이영민</td>
            </tr>
            <tr>
              <td width={200}>나이</td>
              <td>17</td>
            </tr>
            <tr>
              <td width={200}>성별</td>
              <td>남성</td>
            </tr>
            <tr>
              <td width={200}>학력</td>
              <td>
                부흥중학교(졸업)
                <br />
                신도고등학교(재학)
              </td>
            </tr>
            <tr>
              <td width={200}>풀스택 경력</td>
              <td>3년</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
