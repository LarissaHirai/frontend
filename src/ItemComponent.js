import React from "react";

export default function ItemComponent(props) {
  const status = props.status;
  return (
    <li className="list-item">
      <span className="item-name">{props.name} </span>
      <span
        className={props.status ? "status-badge done" : "status-badge pending"}
      >
        Status: {status ? <div>Finalizado</div> : <div>Não Finalizado</div>}
      </span>
    </li>
  );
}
