import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      type={props.type}
      id={props.id}
      onChange={props.onChange}
      value={props.value}
      className={`${classes.input} ${props.className}`}
    />
  );
};

export default Input;
