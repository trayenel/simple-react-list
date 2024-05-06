import styles from "./button-component.module.css";

function ButtonComponent(props) {
  return (
    <button
      className={styles["custom-button"]}
      type={props.type}
      onClick={(event) => {
        event.preventDefault();
        if (props.type === "submit") {
          if (
            !props.userInfo.name ||
            !props.userInfo.age ||
            props.userInfo.age < 1
          )
            props.modalHandler(true);
          else props.userHandler(props.userInfo);
        }
        if (props.type === "modal-button") {
          props.modalHandler(false);
        }
      }}
    >
      {props.children}
    </button>
  );
}

export default ButtonComponent;
