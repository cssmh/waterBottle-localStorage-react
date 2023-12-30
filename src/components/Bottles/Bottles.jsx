import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import {
  getStoredCart,
  newCartGet,
  removeFromLS,
} from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottle, setBottle] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottle(data));
  }, []);

  // Load data from localStorage
  useEffect(() => {
    if (bottle.length > 0) {
      const storedCart = getStoredCart();
      // console.log(storedCart, bottle);

      const savedCartHere = [];
      for (const id of storedCart) {
        // console.log(id);
        const newId = bottle.find((bottle) => bottle.id === id);
        if (newId) {
          savedCartHere.push(newId);
        }
      }
      console.log(savedCartHere);
      setCart(savedCartHere);
    }
  }, [bottle]);

  const handleAddToCart = (cartBottle) => {
    const newCart = [...cart, cartBottle];
    setCart(newCart);
    newCartGet(cartBottle.id);
  };

  const handleRemoveFromCart = (id) => {
    const remainingCart = cart.filter((cart) => cart.id !== id);
    setCart(remainingCart);
    removeFromLS(id);
  };

  return (
    <div>
      <h3>Total Bottles: {bottle.length}</h3>
      <Cart getCart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottles">
        {bottle.map((soloBottle) => (
          <Bottle
            key={soloBottle.id}
            getBottle={soloBottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
