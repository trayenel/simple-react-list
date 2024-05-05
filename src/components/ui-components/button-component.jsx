import styles from "./button-component.module.css";

function ButtonComponent(props) {
  return (
    <button className={styles["submit-button"]} type={props.type}>
      {props.children}
    </button>
  );
}

export default ButtonComponent;
