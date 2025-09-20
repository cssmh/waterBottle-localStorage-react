<<<<<<< HEAD
import PropTypes from 'prop-types';
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

Cart.propTypes = {
    cart: PropTypes.array.isRequired
=======
import PropTypes from 'prop-types' 
import './Cart.css'
const Cart = ({getCart, handleRemoveFromCart}) => {
    // console.log(getCart);
    return (
        <div>
            <h5>Cart: {getCart.length}</h5>
            <div className='cart'>
            {
                getCart.map(soloCart => <div key={soloCart.id}>
                    <img src={soloCart.img}></img><br></br>
                    <button onClick={()=>handleRemoveFromCart(soloCart.id)}>Remove</button>
                </div>)
            }
            </div>
        </div>
    );
};

Cart.propTypes = {
    getCart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
>>>>>>> 0aac9f56b5010ac727b39a2e723b9dcc892d999f
}

export default Cart;