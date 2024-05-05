import "./App.css";
import FormComponent from "./components/form-component/form-component.jsx";
import ButtonComponent from "./components/ui-components/button-component.jsx";

function App() {
  return (
    <div>
      <FormComponent>
        <ButtonComponent type={"submit"}>Add User</ButtonComponent>
      </FormComponent>
    </div>
  );
}

export default App;
