import "./index.css";
import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
class LoginForm extends Component {
  state = { username: "", pasword: "", errorMessage: "", showErrorMsg: false };
  onChangeInp = (event) => this.setState({ username: event.target.value });
  onChangePwd = (event) => this.setState({ password: event.target.value });
  onSubmitUserDetails = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const userDetails = {
      username,
      password,
    };
    const options = {
      method: "POSt",
      body: JSON.stringify(userDetails),
    };
    const url = "https://apis.ccbp.in/login";
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      const { history } = this.props;
      Cookies.set("jwt_token", data.jwt_token, { expires: 30 });
      history.replace("/");
    } else if (response.ok === false) {
      this.setState({ errorMessage: data.error_msg, showErrorMsg: true });
    }
    console.log(response);
  };

  getLoginForm = () => {
    const { errorMessage, showErrorMsg } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.onSubmitUserDetails}>
          <label htmlFor="username">USERNAME</label>
          <input onChange={this.onChangeInp} type="text" id="username" />
          <br />
          <label htmlFor="password">PASSWORD</label>
          <input onChange={this.onChangePwd} type="password" id="password" />
          <br />
          <button type="submit">LOG IN</button>
          {showErrorMsg && <p>{errorMessage}</p>}
        </form>
      </div>
    );
  };
  render() {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      return <Redirect to="/" />;
    }
    return this.getLoginForm();
  }
}
export default LoginForm;
