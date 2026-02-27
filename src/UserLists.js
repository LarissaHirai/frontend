import React from "react";
import ListComponent from "./ListComponent";

export default class UseLists extends React.Component {
  state = { lists: [], loading: true };
  async componentDidMount() {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    config.headers["Authorization"] =
      "Token b0db9907515ff45a9c95540a767e093a538b60d0";

    var url = "http://127.0.0.1:8000/list/";
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data);
    this.setState({ lists: data, loading: false });
  }
  render() {
    const listsapi = this.state.lists;
    return (
      <div>
        {listsapi.map((list) => (
          <ListComponent
            key={list.id}
            listName={list.name}
            items={list.item_set}
          />
        ))}
      </div>
    );
  }
}
