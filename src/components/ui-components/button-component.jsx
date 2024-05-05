import styles from "./button-component.module.css";

function ButtonComponent(props) {
  return (
    <button
      className={styles["submit-button"]}
      type={props.type}
      onClick={(event) => {
        event.preventDefault();
        props.userHandler(props.userInfo);
      }}
    >
      {props.children}
    </button>
  );
}

export default ButtonComponent;
