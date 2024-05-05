import "./App.css";
import FormComponent from "./components/form-component/form-component.jsx";
import ButtonComponent from "./components/ui-components/button-component.jsx";
import InputComponent from "./components/input-component/input-component.jsx";
import { useState } from "react";
import UserListComponent from "./components/user-list-component/user-list-component.jsx";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (data) => setUsers((oldData) => [...oldData, data]);

  const [userInfo, setUserInfo] = useState({ name: "", age: 0 });

  const handleNameChange = (data) => {
    setUserInfo({ ...userInfo, name: data });
  };

  const handleAgeChange = (data) => {
    setUserInfo({ ...userInfo, age: data });
  };

  return (
    <div>
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
          userInfo={userInfo}
        >
          Add User
        </ButtonComponent>
      </FormComponent>
      <UserListComponent users={users} />
    </div>
  );
}

export default App;
