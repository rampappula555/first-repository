import "./index.css";
import CartContext from "../../context";
const CartListView = (props) => (
  <CartContext.Consumer>
    {(value) => {
      const { onDeleteItem } = value;
      const { eachItem } = props;
      const { id, imageUrl, count } = eachItem;
      const onClickDelete = () => onDeleteItem(id);

      return (
        <div className="cart-details-container">
          <img src={imageUrl} alt="img" className="cart-image" />
          <p>quantity {count}</p>
          <button onClick={onClickDelete}>Dlete</button>
        </div>
      );
    }}
  </CartContext.Consumer>
);

export default CartListView;
