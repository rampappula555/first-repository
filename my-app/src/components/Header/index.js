import "./index.css";
import { withRouter, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Component } from "react";
class Header extends Component {
  onClickLogout = () => {
    const { history } = this.props;
    Cookies.remove("jwt_token");
    history.replace("/login");
  };
  render() {
    return (
      <nav className="navbar">
        <div className="button-container">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/cart">
            <button>Cart</button>
          </Link>
          <Link to="/products">
            <button>Products</button>
          </Link>
          <button onClick={this.onClickLogout}>Log Out</button>
        </div>
      </nav>
    );
  }
}
export default withRouter(Header);
