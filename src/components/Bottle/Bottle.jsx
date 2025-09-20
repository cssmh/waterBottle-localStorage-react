<<<<<<< HEAD
import PropTypes from 'prop-types';
import './Bottle.css'
const Bottle = ({getBottle, AddBottleToCart}) => {
    // console.log(getBottle);
    const {price, img, name} = getBottle
    return (
        <div className='bottle'>
            <h3>Name: {name}</h3>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={()=> {AddBottleToCart(getBottle)}}>Purchase</button>
=======
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
>>>>>>> 0aac9f56b5010ac727b39a2e723b9dcc892d999f
        </div>
    );
};

Bottle.propTypes = {
<<<<<<< HEAD
    getBottle: PropTypes.object.isRequired,
    AddBottleToCart: PropTypes.func.isRequired
=======
    getBottle: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired
>>>>>>> 0aac9f56b5010ac727b39a2e723b9dcc892d999f
}

export default Bottle;