import React, { useState } from "react";
import List from "./components/List";
import AddToDo from "./components/AddToDo";

import classes from "./App.module.css";

const list = [
  {
    id: 1,
    name: "Buy groceries",
  },
  {
    id: 2,
    name: "Finish report",
  },
  {
    id: 3,
    name: "Call mom",
  },
  {
    id: 4,
    name: "Go for a run",
  },
  {
    id: 5,
    name: "Pay bills",
  },
  {
    id: 6,
    name: "Read a book",
  },
  {
    id: 7,
    name: "Attend meeting",
  },
  {
    id: 8,
    name: "Clean the house",
  },
  {
    id: 9,
    name: "Plan vacation",
  },
  {
    id: 10,
    name: "Learn a new skill",
  },
];

function App() {
  const [todo, settodo] = useState("");
  const [newList, setnewList] = useState(list);

  const changeHandler = (event) => {
    settodo(event.target.value);
  };

  const clickHandler = () => {
    if (todo.trim(" ").length === 0) {
      return;
    }
    const length = Math.floor(Math.random() * 1000000);
    setnewList((newList) => {
      return [{ id: length, name: todo }, ...newList];
    });
    settodo("");
  };

  const deleteHandler = (id) => {
    const updatedList = newList.filter((item) => item.id !== id);
    setnewList(updatedList);
  };

  const toogleHandler = (id) => {
    const updatedList = newList.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setnewList(updatedList);
  };

  return (
    <div className={classes.container}>
      <div className={classes.app}>
        <h1 className={classes.heading}>My to-do list</h1>
        <AddToDo
          onChange={changeHandler}
          onClick={clickHandler}
          value={todo}
          className={classes.addToDo}
        />
        <div className={classes.listDiv}>
          <List
            list={newList}
            onDelete={deleteHandler}
            onToogle={toogleHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
