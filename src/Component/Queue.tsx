"use client";

import { useEffect, useState } from "react";
import styles from "./main.module.css";

export default function Queue() {
  const [data, setData] = useState({ message: "", author: "" });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://korean-advice-open-api.vercel.app/api/advice"
      );
      const json = await res.json(); // await를 사용하여 비동기적으로 JSON 데이터를 기다림
      console.log(json);
      setData(json);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.bord2}>
      <h1>"{data.message}"</h1>
      <h3>{data.author}</h3>
    </div>
  );
}
