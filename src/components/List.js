import React, { useState } from "react";
import classes from "./List.module.css";

const List = (props) => {
  const [items, setItems] = useState({});

  const clickDeleteHandler = (id) => {
    props.onDelete(id);
  };

  // const checkedHandler = (event, id) => {
  //   const checked = event.target.checked;
  //   setItems((items) => {
  //     return { ...items, [id]: checked };
  //   });
  // };

  return (
    <ul className={classes.list}>
      {props.list.map((el) => (
        <li key={el.id}>
          <input
            type="checkbox"
            checked={el.completed}
            onChange={() => {
              props.onToogle(el.id);
            }}
            className={classes.checkbox}
          />
          <label
            style={{
              textDecoration: el.completed ? "line-through" : "none",
              display: "inline",
            }}
            className={classes.checkboxLabel} // Add the checkbox-label class
          >
            {el.name}
          </label>

          <button
            onClick={() => {
              clickDeleteHandler(el.id);
            }}
            className={classes.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
