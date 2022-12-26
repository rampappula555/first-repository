import "./index.css";
import { Component } from "react";
import Cookies from "js-cookie";
import Header from "../Header";
import CartContext from "../../context";
class ProductItemDetails extends Component {
  state = { detailsList: {}, count: 1 };

  componentDidMount() {
    this.getdetails();
  }
  getdetails = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const response = await fetch(
      `https://apis.ccbp.in/products/${id}`,
      options
    );
    const data = await response.json();
    console.log(data);
    if (response.ok === true) {
      const updateddata = {
        imageUrl: data.image_url,
        id: data.id,
        price: data.price,
      };
      this.setState({ detailsList: updateddata });
    }
  };
  getItems = () => {
    return (
      <CartContext.Consumer>
        {(value) => {
          const { onAddItem } = value;
          const { detailsList, count } = this.state;

          const onClickAddItem = () => {
            const { count } = this.state;
            // const updatedPrice = count * detailsList.price;
            // console.log(`updated price: ${updatedPrice}`);
            onAddItem({ ...detailsList, count });
          };
          const onClickD = () => {
            const { count } = this.state;
            if (count > 1) {
              this.setState((prevState) => ({ count: prevState.count - 1 }));
            }
          };
          const onClickI = () =>
            this.setState((prevState) => ({ count: prevState.count + 1 }));
          return (
            <div>
              <img
                src={detailsList.imageUrl}
                alt="img"
                className="product-image"
              />
              <button onClick={onClickD}>-</button>
              <p>{count}</p>
              <button onClick={onClickI}>+</button>
              <button onClick={onClickAddItem}>ADD ITEM</button>
              <p>{detailsList.price}</p>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  };
  render() {
    return (
      <div>
        <Header />
        {this.getItems()}
      </div>
    );
  }
}
export default ProductItemDetails;
