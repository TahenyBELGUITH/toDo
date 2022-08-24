import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");

  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "invalid input",
        msg: "Please enter a valid name and age (no-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "invalid age",
        msg: "Please enter a valid age(>0)",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUserName("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const AgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          msg={error.msg}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            onChange={userNameChangeHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={AgeChangeHandler}
            value={enteredUserAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
