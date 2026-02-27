import React from "react";
import ItemComponent from "./ItemComponent";

export default function ListComponent(props) {
  const items = props.items;
  return (
    <div className="list-container">
      <div className="list-card">
        <h2 className="list-title"> {props.listName} </h2>
        <ul className="list-items">
          {items.map((item) => (
            <ItemComponent key={item.id} name={item.name} status={item.done} />
          ))}
        </ul>
      </div>
    </div>
  );
}
