const getStoredCart = () => {
  const getCart = localStorage.getItem("cart");
  if (getCart) {
    return JSON.parse(getCart);
  } else {
    return [];
  }
};

const createNew = (cart) => {
  const stringified = JSON.stringify(cart);
  localStorage.setItem("cart", stringified);
};

const newCartGet = (id) => {
  const solo = getStoredCart();
  solo.push(id);
  createNew(solo);
};

const removeFromLS = id => {
  const cart = getStoredCart()
  const remaining = cart.filter(idx => idx !== id);
  createNew(remaining)
}

export { newCartGet, getStoredCart, removeFromLS };
