import "./App.css";
import { useState, Fragment, useRef } from "react";
import FormComponent from "./components/form-component/form-component.jsx";
import ButtonComponent from "./components/ui-components/button-component/button-component.jsx";
import InputComponent from "./components/input-component/input-component.jsx";
import UserListComponent from "./components/user-list-component/user-list-component.jsx";
import ModalWindowComponent from "./components/modal-window-component/modal-window-component.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (data) => setUsers((oldData) => [...oldData, data]);

  const [modalOpen, setModalOpen] = useState(false);
  const modalHandler = (data) => setModalOpen(data);

  const [errorMessage, setErrorMessage] = useState("");
  const errorMessageHandler = (data) => setErrorMessage(data);

  const nameRef = useRef();
  const ageRef = useRef();

  return (
    <Fragment>
      <div className={modalOpen ? "modalActive" : null}>
        <FormComponent>
          <InputComponent name={"name"} type={"text"} data={nameRef}>
            Username
          </InputComponent>
          <InputComponent name={"age"} type={"number"} data={ageRef}>
            Age
          </InputComponent>
          <ButtonComponent
            type={"submit"}
            totalUsers={users}
            userHandler={addUser}
            modalHandler={modalHandler}
            errorMessageHandler={errorMessageHandler}
            name={nameRef}
            age={ageRef}
          >
            Add User
          </ButtonComponent>
        </FormComponent>
        <UserListComponent users={users} />
      </div>
      <Fragment>
        {modalOpen && (
          <ModalWindowComponent message={errorMessage}>
            <ButtonComponent modalHandler={modalHandler} type={"modal-button"}>
              Okay
            </ButtonComponent>
          </ModalWindowComponent>
        )}
      </Fragment>
    </Fragment>
  );
}

export default App;
