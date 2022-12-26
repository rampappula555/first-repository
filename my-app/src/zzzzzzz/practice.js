// import "./index.css";
// import { Component } from "react";
// import ConfigurationController from "./components/ConfiguratinController";
// import Layout from "./components/Layout";
// import ContentContext from "./context";
// class App extends Component {
//   state = {
//     content: true,
//     leftNavbar: true,
//     rightNavbar: true,
//   };

//   onToggleContent = () => {
//     this.setState((prev) => ({ content: !prev.content }));
//   };

//   onToggleLeft = () => {
//     this.setState((prev) => ({ leftNavbar: !prev.leftNavbar }));
//   };

//   onToggleRight = () => {
//     this.setState((prev) => ({ rightNavbar: !prev.rightNavbar }));
//   };

//   render() {
//     const { content, leftNavbar, rightNavbar } = this.state;

//     return (
//       <ContentContext.Provider
//         value={{
//           content,
//           onToggleContent: this.onToggleContent,
//           leftNavbar,
//           onToggleLeft: this.onToggleLeft,
//           rightNavbar,
//           onToggleRight: this.onToggleRight,
//         }}
//       >
//         <div className="app-bg">
//           <ConfigurationController />
//           <Layout />
//         </div>
//       </ContentContext.Provider>
//     );
//   }
// }
// export default App;
import "./index.css";
import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";
import HomeForLogin from "./components/HomeForLogin";
import Cart from "./components/Cart";
import Products from "./components/Products";
import NotFound from "./components/NotFound";
import ProductItemDetails from "./components/ProductItemDetails";
import CartContext from "./context";
import NoInternetConnection from "./components/NoInternet";
class App extends Component {
  state = { cartList: [] };
  onAddItem = (product) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, product],
    }));
  };
  // onDeleteItem = (props) => {
  //   const { cartList } = this.state;
  //   this.setState({
  //     cartList: cartList.filter((eachItem) => eachItem.id !== props),
  //   });
  // };
  onDeleteItem = (id) => {
    console.log(id);
  };
  onIncrement = (updatedCartList) => {
    this.setState({ cartList: updatedCartList });
  };
  onDecrement = (updatedCartList) => {
    this.setState({ cartList: updatedCartList });
  };
  render() {
    const { cartList } = this.state;
    return (
      <BrowserRouter>
        <NoInternetConnection>
          <CartContext.Provider
            value={{
              cartList,
              onAddItem: this.onAddItem,
              onDeleteItem: this.onDeleteItem,
              onDecrement: this.onDecrement,
              onIncrement: this.onIncrement,
            }}
          >
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <ProtectedRoute exact path="/" component={HomeForLogin} />
              <ProtectedRoute exact path="/cart" component={Cart} />
              <ProtectedRoute exact path="/products" component={Products} />
              <ProtectedRoute
                exact
                path="/products/:id"
                component={ProductItemDetails}
              />
              <ProtectedRoute component={NotFound} />
            </Switch>
          </CartContext.Provider>
        </NoInternetConnection>
      </BrowserRouter>
    );
  }
}
export default App;
