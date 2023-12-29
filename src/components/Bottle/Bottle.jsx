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
        </div>
    );
};

Bottle.propTypes = {
    getBottle: PropTypes.object.isRequired,
    AddBottleToCart: PropTypes.func.isRequired
}

export default Bottle;