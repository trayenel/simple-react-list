import styles from "./modal-window-component.module.css";
import { createPortal } from "react-dom";
import { Fragment } from "react";

function ModalWindowComponent(props) {
  return (
    <div className={styles["modal-window"]}>
      <h2>Invalid Input</h2>
      <h3>{props.message}</h3>
      <div className={styles.button}>{props.children}</div>
    </div>
  );
}

export default ModalWindowComponent;
