import React from "react";
import { connect } from "react-redux";
import { toggleDone, updateTitle, deleteItem } from "../../action/todoList";

function ListItem({ item, titleId, toggleDone, updateTitle, deleteItem }) {
  const handleClick = (e) => {
    console.log(e);
    let id = e.target.id;
    if (id === "edit" + titleId) {
      handleEdit();
    } else if (id === "delete" + titleId) {
      handleDelete();
    } else if (id === "title" + titleId) {
      handleToggleItem();
    }
  };

  const handleToggleItem = () => {
    toggleDone(titleId);
  };

  const handleDelete = () => {
    deleteItem(titleId);
  };

  const handleEdit = () => {
    updateTitle(titleId, "item" + new Date().getTime());
  };
  return (
    <div>
      <li onClick={(e) => handleClick(e)}>
        <div className="contents">
          <span id={"title" + titleId} className={`${item.done && "done"}`}>
            {item.title}
          </span>
        </div>
        <div className="actions">
          <button id={"edit" + titleId}>Edit</button>
          <button id={"delete" + titleId}>Delete</button>
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
  updateTitle,
  deleteItem,
};

export default connect(null, mapDispatchToProps)(ListItem);
