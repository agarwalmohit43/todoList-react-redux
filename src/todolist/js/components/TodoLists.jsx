import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";

import Lists from "./Lists";
import { add, updateTitle, clearSelectedItem } from "../../action/todoList";
import "../../style/TodoList.scss";

function TodoLists(props) {
  const { add, updateTitle, clearSelectedItem, todoLists, selectedItem } =
    props;

  const [itemTitle, setItemTitle] = useState("");
  const [formState, setFormState] = useState(!!selectedItem);
  const inputRef = useRef();

  // if (selectedItem) {
  //   setItemTitle(selectedItem.item.title);
  // }

  useEffect(() => {
    if (selectedItem) {
      setFormState(false);
      setItemTitle(selectedItem.item.title);
    } else {
      setFormState(true);
      setItemTitle("");
    }
  }, [selectedItem]);

  const handleSubmit = () => {
    if (itemTitle === "") {
      console.log("Empty item cannot be added");
      inputRef.current.classList.add("error");
    } else {
      inputRef.current.classList.contains("error") &&
        inputRef.current.classList.remove("error");
      if (formState) {
        add({ [new Date().getTime()]: { title: itemTitle, done: false } });
        setItemTitle("");
      } else {
        updateTitle(selectedItem.titleId, itemTitle);
        setItemTitle("");
        clearSelectedItem();
      }
    }
  };

  const renderList =
    Object.keys(todoLists).length > 0 ? (
      <Lists lists={todoLists} />
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
        <button className="btn btn-primary" onClick={handleSubmit}>
          {formState ? "Add" : "Update"}
        </button>
      </div>
       
      <div className={"Lists"}>
        <h1>Todo List</h1>
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
  updateTitle,
  clearSelectedItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoLists);
