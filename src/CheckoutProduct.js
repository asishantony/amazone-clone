import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt={title} className="checkoutProduct__image" />
      <div className="CheckoutPoduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
