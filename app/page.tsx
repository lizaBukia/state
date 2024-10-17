"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Button from "./components/Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const minus = (): void => {
    setCounter(counter - 1);
  };
  const plus = (): void => {
    setCounter(counter + 1);
  };
  return (
    <div className={styles.wrapper}>
      <Button onClick={minus}>-</Button>
      <span className={styles.font}>{counter}</span>
      <Button onClick={plus}>+</Button>
    </div>
  );
};
export default Counter;
