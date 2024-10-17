import styles from "./button.module.css";
import { ButtonPropsInterface } from "./interfaces/buttonProps.interface";

const Button = (props: ButtonPropsInterface) => {
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.children}
    </button>
  );
};
export default Button;
