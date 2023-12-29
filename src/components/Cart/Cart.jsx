import "./Cart.css";
const Cart = ({ getCart }) => {
  return (
    <div>
      <p>Cart: {getCart.length}</p>
      <div className="cart">
        {getCart.map(myBottle => <img key={myBottle.id} src={myBottle.img}></img>)}
      </div>
    </div>
  );
};

export default Cart;