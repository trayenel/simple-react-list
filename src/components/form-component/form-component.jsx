import styles from "./form-component.module.css";

function FormComponent(props) {
  return <form className={styles["user-form"]}>{props.children}</form>;
}

export default FormComponent;
