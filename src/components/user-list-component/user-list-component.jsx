// import styles from "./user-list-component.module.css";

function UserListComponent(props) {
  if (props.users.length < 1) return;
  return (
    <ul>
      {props.users.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </ul>
  );
}

export default UserListComponent;
