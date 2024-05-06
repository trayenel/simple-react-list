import "./App.css";
import { useState } from "react";
import FormComponent from "./components/form-component/form-component.jsx";
import ButtonComponent from "./components/ui-components/button-component/button-component.jsx";
import InputComponent from "./components/input-component/input-component.jsx";
import UserListComponent from "./components/user-list-component/user-list-component.jsx";
import ModalWindowComponent from "./components/modal-window-component/modal-window-component.jsx";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (data) => setUsers((oldData) => [...oldData, data]);

  const [userInfo, setUserInfo] = useState({});

  const handleNameChange = (data) => {
    setUserInfo({ ...userInfo, name: data });
  };

  const handleAgeChange = (data) => {
    setUserInfo({ ...userInfo, age: data });
  };

  const [modalOpen, setModalOpen] = useState(false);

  const modalHandler = (data) => setModalOpen(data);

  return (
    <div>
      <div className={modalOpen ? "modalActive" : null}>
        <FormComponent>
          <InputComponent
            name={"name"}
            type={"text"}
            dataHandler={handleNameChange}
          >
            Username
          </InputComponent>
          <InputComponent
            name={"name"}
            type={"number"}
            dataHandler={handleAgeChange}
          >
            Age
          </InputComponent>
          <ButtonComponent
            type={"submit"}
            totalUsers={users}
            userHandler={addUser}
            modalHandler={modalHandler}
            userInfo={userInfo}
          >
            Add User
          </ButtonComponent>
        </FormComponent>
        <UserListComponent users={users} />
      </div>
      <div>
        {modalOpen && (
          <ModalWindowComponent>
            <ButtonComponent modalHandler={modalHandler} type={"modal-button"}>
              Okay
            </ButtonComponent>
          </ModalWindowComponent>
        )}
      </div>
    </div>
  );
}

export default App;
