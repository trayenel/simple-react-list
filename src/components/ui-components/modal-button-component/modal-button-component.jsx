import styles from "./modal-button-component.module.css";

function ModalButtonComponent(props) {
  return (
    <button
      className={styles["submit-button"]}
      type={props.type}
      onClick={(event) => {
        event.preventDefault();
        props.modalHandler(false);
      }}
    >
      {props.children}
    </button>
  );
}

export default ModalButtonComponent;
