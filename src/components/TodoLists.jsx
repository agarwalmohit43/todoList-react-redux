import React, { useState } from "react";
import { connect } from "react-redux";
import { add, toggleDone } from "../actions/todoList";
import "../style/TodoList.scss";

function TodoLists(props) {
  const [itemTitle, setItemTitle] = useState("");

  const handleClick = () => {
    if (itemTitle !== "") {
      props.add({ [new Date().getTime()]: { title: itemTitle, done: false } });
      setItemTitle("");
    } else {
      console.log("Empty item cannot be added");
    }
  };

  const handleToggleItem = (id) => {
    if (id) {
      props.toggleDone(id);
    }
  };

  return (
    <>
      <div className="create-list">
        <input
          value={itemTitle}
          onChange={(e) => setItemTitle(e.target.value)}
        />
        <button onClick={handleClick}>Add</button>
      </div>
       
      <div className={"Lists"}>
        <h1>Todo Lists</h1>
        <ul>
          {Object.keys(props.todoLists).length > 0 &&
            Object.keys(props.todoLists).map((id, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleToggleItem(id)}
                  className={`${props.todoLists[id].done && "done"}`}
                >
                  {props.todoLists[id].title}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
};

const mapDispatchToProps = {
  add,
  toggleDone,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
