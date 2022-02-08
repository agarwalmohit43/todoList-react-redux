import React from "react";
import ListItem from "./ListItem";

function Lists({ lists }) {
  //   console.log("Lists", lists);
  return (
    <>
      <ul>
        {Object.keys(lists).map((titleId, index) => {
          return (
            <ListItem
              key={index + titleId}
              item={lists[titleId]}
              titleId={titleId}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Lists;
