import React, { useState } from "react";
import Button from "../UI/Button";
import Form from "../UI/Form";
import Input from "../UI/Input";

const User = () => {
  const [username, setUsername] = useState("World");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isButtonValid, setIsButtonValid] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(enteredUsername);
    setEnteredEmail("");
    setEnteredUsername("");
    setIsButtonValid(false);
  };
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
    setIsButtonValid(
      e.target.value.trim().length > 0 && enteredEmail.includes("@")
    );
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    setIsButtonValid(
      enteredUsername.trim().length > 0 && e.target.value.includes("@")
    );
  };

  return (
    <React.Fragment>
      <h1>Hello {username}</h1>
      <Form onSubmit={submitHandler}>
        <label htmlFor='username'>Username: </label>
        <Input
          type='text'
          id='username'
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor='email'>Email: </label>
        <Input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        {isButtonValid && <Button type='submit'>Submit</Button>}
      </Form>
    </React.Fragment>
  );
};

export default User;
