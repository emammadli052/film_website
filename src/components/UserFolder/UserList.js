import React from "react";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const users = props.signedUsers;

  return (
    <ul className={`${classes["user-list"]} ${props.className}`}>
      {users.map((user) => (
        <li key={user.id}>{user.email}</li>
      ))}
    </ul>
  );
};

export default UserList;
