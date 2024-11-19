import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

import { cartActions } from "../../store/cartSlice";

const ProductItem = ({ productDetails }) => {
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(cartActions.addItem(productDetails));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{productDetails.title}</h3>
          <div className={classes.price}>
            ${productDetails.price.toFixed(2)}
          </div>
        </header>
        <p>{productDetails.description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
