import React from "react";
import ListComponent from "./ListComponent";

export default class UseLists extends React.Component {
  state = { lists: [], loading: true };
  async componentDidMount() {
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    config.headers["Authorization"] =
      "Token 2ec1355f2016f5a2838628ace737917c9ad8678e";

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
