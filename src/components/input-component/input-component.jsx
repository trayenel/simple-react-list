import styles from "./input-component.module.css";

function InputComponent(props) {
  return (
    <div className={styles["input-group"]}>
      <label htmlFor={props.name} className={styles[props.name]}>
        {props.children}
      </label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        onChange={(event) => {
          event.preventDefault();
          props.dataHandler(event.target.value);
          console.log(props.data);
        }}
      />
    </div>
  );
}

export default InputComponent;
