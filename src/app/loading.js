import React from "react";
import styles from "./styles.module.css";

export default function Loading() {
  //* Loading ekranini root levelda olusturdugumuz icin tum sayfalarin yuklenme sirasinda bu ekran gozukecek
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
