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
}

export default Cart;