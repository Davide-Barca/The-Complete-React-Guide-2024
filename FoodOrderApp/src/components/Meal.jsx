import { useContext } from "react";
import CartContext from "../store/cartContext";

import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function Meal({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt="" />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p>
          <Button className="meal-item-actions" onClick={handleAddMealToCart}>
            Add to cart
          </Button>
        </p>
      </article>
    </li>
  );
}
