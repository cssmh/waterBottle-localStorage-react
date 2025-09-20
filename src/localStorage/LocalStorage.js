const getStoredCart = () => {
  const getCart = localStorage.getItem("cart");
  if (getCart) {
    return JSON.parse(getCart);
  } else {
    return [];
  }
};

const saveToLS = (gotCart) => {
  const stringifyCart = JSON.stringify(gotCart);
  localStorage.setItem("cart", stringifyCart);
};

const addToLS = (id) => {
  const adding = getStoredCart();
  adding.push(id);
  saveToLS(adding);
};

export { addToLS, getStoredCart };