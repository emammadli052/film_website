import { useState } from "react";
import "./App.css";
import User from "./components/UserFolder/User";
import Button from "./components/UI/Button";

function App() {
  const backgroundChangeHandler = () => {
    document.querySelector("body").classList.toggle("black-background");
  };

  return (
    <div className='App'>
      <User />
      <Button onClick={backgroundChangeHandler}> Change Background </Button>
    </div>
  );
}

export default App;
