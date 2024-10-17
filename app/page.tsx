"use client";
import { useState } from "react";
import styles from "./page.module.css";

const Counter = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const minus = (): void => {
    setCounter(counter - 1);
  };
  const plus = (): void => {
    setCounter(counter + 1);
  };
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={minus}>
        -
      </button>
      <span className={styles.font}>{counter}</span>
      <button className={styles.button} onClick={plus}>
        +
      </button>
    </div>
  );
};
export default Counter;
