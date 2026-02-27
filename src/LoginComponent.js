import React from "react";
import UseLists from "./UserLists";

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    var url = "http://127.0.0.1:8000/api-token-auth/";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        this.setState({ token: data.token });
      });
    event.preventDefault();
  }

  logout() {
    localStorage.removeItem("token");
    this.setState({ token: null });
  }

  render() {
    var token = localStorage.getItem("token");
    if (!token) {
      return (
        <div className="login-container">
          <form className="login-form" onSubmit={this.handleSubmit}>
            <h2>Login</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChangePassword}
                />
              </div>
            </div>
            <input type="submit" value="Submit" className="login-button" />
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <UseLists />
          <button
            className="logout-button top-right"
            onClick={() => this.logout()}
          >
            Logout
          </button>
        </div>
      );
    }
  }
}
