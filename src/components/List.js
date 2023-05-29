import React, { useState } from "react";
import classes from "./List.module.css";

const List = (props) => {
  const [items, setItems] = useState({});

  const clickDeleteHandler = (id) => {
    props.onDelete(id);
  };

  const checkedHandler = (event, id) => {
    const checked = event.target.checked;
    setItems((items) => {
      return { ...items, [id]: checked };
    });
  };

  return (
    <ul className={classes.list}>
      {props.list.map((el) => (
        <li key={el.id}>
          <input
            type="checkbox"
            checked={items[el.id] || false}
            onChange={(event) => {
              checkedHandler(event, el.id);
            }}
            className={classes.checkbox}
          />
          <label
            style={{
              textDecoration: items[el.id] ? "line-through" : "none",
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
