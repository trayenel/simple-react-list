import "./App.css";
import FormComponent from "./components/form-component/form-component.jsx";
import ButtonComponent from "./components/ui-components/button-component.jsx";
import InputComponent from "./components/input-component/input-component.jsx";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (data) => setUsers((oldData) => [...oldData, data]);

  const [userInfo, setUserInfo] = useState({ name: "", age: 0 });

  const changerUserInfo = (name, age) => {
    setUserInfo({ name, age });
  };

  return (
    <div>
      <FormComponent>
        <InputComponent
          name={"name"}
          type={"text"}
          dataHandler={changerUserInfo}
          data={userInfo}
        >
          Username
        </InputComponent>
        <InputComponent
          name={"name"}
          type={"number"}
          data={userInfo}
          dataHandler={changerUserInfo}
        >
          Age
        </InputComponent>
        <ButtonComponent type={"submit"} user={users} userHandler={addUser}>
          Add User
        </ButtonComponent>
      </FormComponent>
    </div>
  );
}

export default App;
