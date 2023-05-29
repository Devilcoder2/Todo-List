import React from "react";
import classes from "./AddToDo.module.css";

const AddToDo = (props) => {
  return (
    <div className={classes.addContainer}>
      {/* <label htmlFor="task">Enter the task</label> */}
      <input
        type="text"
        id="task"
        name="task"
        onChange={props.onChange}
        value={props.value}
        placeholder="Enter the task"
        className={classes.addInput}
      />
      <button onClick={props.onClick} className={classes.addButton}>
        Add
      </button>
    </div>
  );
};

export default AddToDo;
