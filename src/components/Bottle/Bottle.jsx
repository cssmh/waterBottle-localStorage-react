import PropTypes from 'prop-types' 
import './Bottle.css'
const Bottle = ({getBottle, handleAddToCart}) => {
    // console.log(getBottle);
    const {name, price, img} = getBottle
    return (
        <div className='bottle'>
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <img src={img} alt="" />
            <button onClick={()=> handleAddToCart(getBottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    getBottle: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;