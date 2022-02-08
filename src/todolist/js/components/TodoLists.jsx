import React, { useRef, useState } from "react";
import { connect } from "react-redux";

import Lists from "./Lists";
import { add } from "../../action/todoList";
import "../../style/TodoList.scss";

function TodoLists(props) {
  const [itemTitle, setItemTitle] = useState("");
  const inputRef = useRef();

  const handleAdd = () => {
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

  const renderList =
    Object.keys(props.todoLists).length > 0 ? (
      <Lists lists={props.todoLists} />
    ) : (
      <span>List is emplty</span>
    );

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
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
       
      <div className={"Lists"}>
        <h1>Todo Lists</h1>
        {renderList}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
