import styles from "./form-component.module.css";

function FormComponent(props) {
  return (
    <div>
      <form className={styles["user-form"]}>
        {/*  <label htmlFor={"name"} className={styles["name-label"]}>*/}
        {/*    Username*/}
        {/*  </label>*/}
        {/*  <input type={"text"} id={"name"} name={"name"} />*/}
        {/*  <label htmlFor={"number"} className={styles["age-label"]}>*/}
        {/*    Age (years)*/}
        {/*  </label>*/}
        {/*  <input type={"number"} id={"age"} />*/}
        {props.children}
      </form>
    </div>
  );
}

export default FormComponent;
