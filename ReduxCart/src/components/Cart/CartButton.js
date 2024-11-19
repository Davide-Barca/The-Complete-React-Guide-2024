import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items)

  function handleToogleCart() {
    dispatch(cartActions.toogleCart());
  }

  return (
    <button className={classes.button} onClick={handleToogleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
