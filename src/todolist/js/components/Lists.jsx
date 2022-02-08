import React from "react";
import ListItem from "./ListItem";

function Lists({ lists }) {
  //   console.log("Lists", lists);
  return (
    <>
      <ul>
        {Object.keys(lists).map((titleId, index) => {
          return (
            <li key={index}>
              <ListItem item={lists[titleId]} titleId={titleId} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Lists;
