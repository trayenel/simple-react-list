import styles from "./form-component.module.css";

function FormComponent(props) {
  return (
    <div>
      <form className={styles["user-form"]}>{props.children}</form>
    </div>
  );
}

export default FormComponent;
