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
            !props.name.current.value.trim() ||
            !props.age.current.value.trim()
          ) {
            props.errorMessageHandler(
              "Please a valid user name and age (non-empty values).",
            );
            props.modalHandler(true);
            return;
          }

          if (+props.age.current.value < 1) {
            props.errorMessageHandler("Please a valid age (>0).");
            props.modalHandler(true);
            return;
          }
          props.userHandler({
            name: props.name.current.value,
            age: props.age.current.value,
          });
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
