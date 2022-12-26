// import React from "react";
// const ContentContext = React.createContext({
//   content: true,
//   onToggleContent: () => {},
//   leftNavbar: true,
//   onToggleLeft: () => {},
//   rightNavbar: true,
//   onToggleRight: () => {},
// });

// export default ContentContext;
import React from "react";
const CartContext = React.createContext({
  onAddItem: () => {},
  cartList: [],
  onDeleteItem: () => {},
  onIncrement: () => {},
  onDecrement: () => {},
});
export default CartContext;
