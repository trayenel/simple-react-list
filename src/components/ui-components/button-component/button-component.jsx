import styles from "./button-component.module.css";

function ButtonComponent(props) {
  return (
    <button
      className={styles["submit-button"]}
      type={props.type}
      onClick={(event) => {
        event.preventDefault();
        if (
          !props.userInfo.name ||
          !props.userInfo.age ||
          props.userInfo.age < 1
        )
          props.modalHandler(true);
        else props.userHandler(props.userInfo);
      }}
    >
      {props.children}
    </button>
  );
}

export default ButtonComponent;
