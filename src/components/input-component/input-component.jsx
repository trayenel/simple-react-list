import styles from "./input-component.module.css";
import { Fragment } from "react";

function InputComponent(props) {
  return (
    <Fragment className={styles["input-group"]}>
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
        }}
      />
    </Fragment>
  );
}

export default InputComponent;
