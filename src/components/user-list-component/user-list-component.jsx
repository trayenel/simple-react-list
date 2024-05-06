// import styles from "./user-list-component.module.css";

function UserListComponent(props) {
  if (props.users.length < 1) return;
  console.log(props.users);
  return (
    <ul>
      {props.users.map((user, index) => {
        return (
          <li key={index}>
            {user.name} ({user.age} years old)
          </li>
        );
      })}
    </ul>
  );
}

export default UserListComponent;
