"use client";

import Image from "next/image";
import styles from "./main.module.css";
import Icons from "./skills/index";
import { useState } from "react";
export default function Skill() {
  const [Text, setText] = useState();
  const [alert, setAlert] = useState(false);
  const handleClick = (e: any) => {
    const altText = e.target.alt;
    setText(altText);
    setAlert(true);
    console.log(altText);
    // 여기서 altText를 사용하여 추가 작업을 수행할 수 있습니다.
  };

  const handleDismiss = () => {
    setAlert(false);
  };

  return (
    <div>
      {alert && (
        <div className={styles.overlay}>
          <div className={styles.alertBox}>
            <p>{Text}</p>
            <button onClick={handleDismiss} className={styles.dismissButton}>
              Dismiss
            </button>
          </div>
        </div>
      )}
      <div className={styles.bord}>
        <div className={styles.text}>
          <h1>Skills & Stack</h1>
          <div>
            {Object.keys(Icons).map((key) => (
              <Image
                key={key}
                src={Icons[key]}
                alt={`${key}`}
                width={100} // 적절한 크기로 설정
                height={100}
                onClick={handleClick} // 적절한 크기로 설정
                className={styles.pythonImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
