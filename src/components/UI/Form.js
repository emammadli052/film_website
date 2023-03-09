import classes from "./Form.module.css";

const Form = (props) => {
  const classNames = `${classes.form} ${props.className}`;
  return (
    <form
      action={props.action}
      onSubmit={props.onSubmit}
      className={classNames}
    >
      {props.children}
    </form>
  );
};

export default Form;
