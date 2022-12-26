import "./index.css";
import Header from "../Header";
import CartContext from "../../context";
// import CartListView from "../CartListView";

const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartList, onDeleteItem, onIncrement, onDecrement } = value;
      let temp = [];
      let updatedArray = [];
      cartList.map((eachItem) => {
        if (temp.includes(eachItem.id)) {
          for (let i in updatedArray) {
            if (updatedArray[i].id === eachItem.id) {
              updatedArray.splice(i, 1, {
                ...eachItem,
                count: updatedArray[i].count + eachItem.count,
              });
            }
          }
        } else {
          updatedArray.push(eachItem);
          temp.push(eachItem.id);
        }
      });
      // const TotalPrice = updatedArray.reduce((prevValue, currentValue) => {
      //   return prevValue + currentValue.price;
      // }, 0);
      const totalPrice = updatedArray.map(
        (eachItem) => eachItem.count * eachItem.price
      );
      const flag = totalPrice.reduce((prev, acc) => prev + acc, 0);
      console.log(`flag id${flag}`);

      console.log(cartList);
      console.log(updatedArray);
      const onclickDecrement = (id) => {
        const res = updatedArray.map((eachItem) => {
          if (eachItem.id === id && eachItem.count > 1) {
            return { ...eachItem, count: eachItem.count - 1 };
          }
          return eachItem;
        });
        onDecrement(res);
      };
      const onClickIncrement = (id) => {
        const res = updatedArray.map((eachItem) => {
          if (eachItem.id === id) {
            return { ...eachItem, count: eachItem.count + 1 };
          }
          return eachItem;
        });
        onIncrement(res);
      };
      return (
        <div>
          <Header />
          <div>
            {updatedArray.map((eachItem) => (
              <div key={eachItem.id} className="cart-details-container">
                <img src={eachItem.imageUrl} alt="img" className="cart-image" />
                <button
                  onClick={() => {
                    onclickDecrement(eachItem.id);
                  }}
                >
                  -
                </button>
                <p>quantity {eachItem.count}</p>

                <button
                  onClick={() => {
                    onClickIncrement(eachItem.id);
                  }}
                >
                  +
                </button>
                <p>single item price :{eachItem.price}</p>

                <button
                  onClick={() => {
                    onDeleteItem(eachItem.id);
                  }}
                >
                  Delete
                </button>
                <p>{eachItem.price * eachItem.count}</p>
              </div>
            ))}
            {flag !== 0 && <h1>{flag}</h1>}
            {/* {updatedArray.map((eachItem) => (
              <CartListView key={eachItem.id} eachItem={eachItem} />
            ))} */}
          </div>
        </div>
      );
    }}
  </CartContext.Consumer>
);

export default Cart;
