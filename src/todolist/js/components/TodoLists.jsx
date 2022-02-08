import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { add, toggleDone } from "../../action/todoList";
import "../../style/TodoList.scss";

function TodoLists(props) {
  const [itemTitle, setItemTitle] = useState("");
  const inputRef = useRef();

  const handleClick = () => {
    if (itemTitle !== "") {
      inputRef.current.classList.contains("error") &&
        inputRef.current.classList.remove("error");
      props.add({ [new Date().getTime()]: { title: itemTitle, done: false } });
      setItemTitle("");
    } else {
      console.log("Empty item cannot be added");
      inputRef.current.classList.add("error");
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
          onChange={(e) => {
            //First, remove error border
            // inputRef.current.classList.contains("error") &&
            //   inputRef.current.classList.remove("error");
            setItemTitle(e.target.value);
          }}
          ref={inputRef}
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
