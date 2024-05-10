import styles from "./input-component.module.css";

function InputComponent(props) {
  return (
    <div className={styles["input-group"]}>
      <label htmlFor={props.name} className={styles[props.name]}>
        {props.children}
      </label>
      <input
        ref={props.data}
        type={props.type}
        id={props.name}
        name={props.name}
      />
    </div>
  );
}

export default InputComponent;
