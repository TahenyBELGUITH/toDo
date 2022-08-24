import React from "react";
import Card from "../UI/Card";
import classes from "./usersList.module.css";

function usersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.uName} ({user.uAge} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default usersList;
