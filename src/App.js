import React, { useState } from "react";
import "./index.css";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/usersList";

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), uName: userName, uAge: userAge },
      ];
    });
  };
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
