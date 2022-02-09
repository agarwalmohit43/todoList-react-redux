import React from "react";
import { connect } from "react-redux";
import { toggleDone, deleteItem, selectedItem } from "../../action/todoList";

function ListItem({ item, titleId, toggleDone, deleteItem, selectedItem }) {
  // const handleClick = (e) => {
  //   console.log(e);
  //   let id = e.target.id;
  //   if (id === "edit" + titleId) {
  //     handleEdit();
  //   } else if (id === "delete" + titleId) {
  //     handleDelete();
  //   } else if (id === "title" + titleId) {
  //     // handleToggleItem();
  //     console.log("called");
  //   }
  // };

  const handleToggleItem = () => {
    toggleDone(titleId);
  };

  const handleDelete = () => {
    deleteItem(titleId);
  };

  const handleEdit = () => {
    selectedItem(item, titleId);
  };
  return (
    <div className="todolist-item">
      <li>
        <div className="items">
          <div className="contents">
            <input
              type={"checkbox"}
              checked={item.done}
              onChange={handleToggleItem}
            />
            <span id={"title" + titleId} className={`${item.done && "done"}`}>
              {item.title}
            </span>
          </div>
          <div className="actions">
            <button id={"edit" + titleId} onClick={handleEdit}>
              Edit
            </button>
            <button id={"delete" + titleId} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

// mapDispatchToProps function way
// const mapDispatchToProps = (dispatch, ownProps) => {
//   // toggleDone,
//   // updateTitle,
//   return {
//     toggleDone: (id) =>
//       dispatch({
//         type: "TOGGLE_DONE",
//         payload: {
//           id,
//         },
//       }),
//     deleteItem: (id) => dispatch({ type: "DELETE", payload: { id } }),
//   };
// };

const mapDispatchToProps = {
  toggleDone,
  deleteItem,
  selectedItem,
};

export default connect(null, mapDispatchToProps)(ListItem);
