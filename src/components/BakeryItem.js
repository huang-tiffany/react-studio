import React from "react";
import { useState } from "react";

// TODO: create a component that displays a single bakery item
export function BakeryItem(props) {
  const { itemName, itemPrice, itemImg, itemDescription, addToCart } = props;
  const [count, setCount] = useState(0);

  const updateCart = () => {
    setCount(count + 1);
    addToCart(itemName, itemPrice, count);
  };
  return (
    <div className="bakery-item">
      <img src={itemImg} alt={itemName}></img>
      <h3>{itemName}</h3>
      <p className="item-description">{itemDescription}</p>

      <div className="purchase">
        <p>{"$" + itemPrice}</p>
        <button onClick={() => updateCart()}>Add to Cart</button>
      </div>
    </div>
  );
}
