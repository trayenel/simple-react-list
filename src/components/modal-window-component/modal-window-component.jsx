import styles from "./modal-window-component.module.css";

function ModalWindowComponent(props) {
  return (
    <div className={`${styles["modal-window"]}`}>
      <h2>Invalid Input</h2>
      <h3>Please a valid user name and age (non-empty values).</h3>
      {props.children}
    </div>
  );
}

export default ModalWindowComponent;
