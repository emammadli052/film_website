import "./App.css";
import User from "./components/UserFolder/User";
import Button from "./components/UI/Button";
import UserList from "./components/UserFolder/UserList";
import { useState } from "react";

function App() {
  const [signedUsers, setSignedUsers] = useState([]);
  const [isArrayEmpty, setIsArrayEmpty] = useState(true);

  const backgroundChangeHandler = () => {
    document.querySelector("body").classList.toggle("black-background");
  };

  const addUserHandler = (user) => {
    setSignedUsers([...signedUsers, user]);
    setIsArrayEmpty(false);
    console.log(signedUsers.length);
  };

  return (
    <div className='App'>
      <User addUserHandler={addUserHandler} />
      <Button onClick={backgroundChangeHandler}> Change Background </Button>
      {!isArrayEmpty && <UserList signedUsers={signedUsers} />}
    </div>
  );
}

export default App;
