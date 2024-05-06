import styles from "./modal-window-component.module.css";

function ModalWindowComponent(props) {
  return (
    <div className={styles["modal-window"]}>
      <div className={styles.header}>
        <h2>Invalid Input</h2>
      </div>
      <h3>Please a valid user name and age (non-empty values).</h3>
      <div className={styles.button}>{props.children}</div>
    </div>
  );
}

export default ModalWindowComponent;
