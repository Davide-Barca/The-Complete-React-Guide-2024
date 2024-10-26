import { useContext } from "react";
import mainLogo from "../assets/logo.jpg";
import CartContext from "../store/cartContext";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export default function Header({ cartItems }) {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={mainLogo} alt="Hamburger Logo" />
        <h1>REACTFOOD</h1>
      </div>
      <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
    </header>
  );
}
