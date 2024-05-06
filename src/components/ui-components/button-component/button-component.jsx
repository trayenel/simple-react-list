import styles from "./button-component.module.css";

function ButtonComponent(props) {
  return (
    <button
      className={styles["custom-button"]}
      type={props.type}
      onClick={(event) => {
        event.preventDefault();
        if (props.type === "submit") {
          if (!props.userInfo.name || !props.userInfo.age) {
            props.errorMessageHandler(
              "Please a valid user name and age (non-empty values).",
            );
            props.modalHandler(true);
            return;
          }
          if (props.userInfo.age < 1) {
            props.errorMessageHandler("Please a valid age (>0).");
            props.modalHandler(true);
            return;
          }
          props.userHandler(props.userInfo);
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
