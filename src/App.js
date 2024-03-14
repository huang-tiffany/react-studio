import "./App.css";
import { useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem } from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (itemName, itemPrice) => {
    setCart([...cart, itemName]);
    setTotal(total + itemPrice);
  };

  useEffect(() => {}, [setCart, cart]);

  const populateCart = () => {
    if (cart.length == 0) {
      return <p>Nothing here yet!</p>;
    } else {
      return (
        <div>
          {cart.map((item) => (
            <div class="cart-entry">
              <div class="cart-entry-name">1x {item}</div>
            </div> // replace with BakeryItem component
          ))}
          <br></br>
          <p className="cart-total">Total: ${total}</p>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <h1>Carr Haus</h1>

      <div className="content">
        <div className="menu">
          <h2>Menu</h2>
          <div className="bakery-item-container">
            {bakeryData.map(
              (
                item,
                index // TODO: map bakeryData to BakeryItem components
              ) => (
                <BakeryItem
                  itemName={item.name}
                  itemPrice={item.price}
                  itemDescription={item.description}
                  itemImg={item.image}
                  addToCart={addToCart}
                  key={index}
                ></BakeryItem> // replace with BakeryItem component
              )
            )}
          </div>
        </div>

        <div className="cart-container">
          <h2>Cart</h2>
          <div className="cart">{populateCart()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
