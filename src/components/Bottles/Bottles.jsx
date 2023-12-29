import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../localStorage/LocalStorage";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=> {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // Load cart from local storage
    useEffect(()=>{
        const localData = getStoredCart()
        setCart(localData);
    },[])

    const AddBottleToCart = getBottle => {
        const newCart = [...cart, getBottle]
        setCart(newCart)
        addToLS(getBottle.id)
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Cart: {cart.length}</p>
            <div className="bottle-container">
            {
                bottles.map(soloBottle => <Bottle
                key={soloBottle.id}
                getBottle={soloBottle}
                AddBottleToCart={AddBottleToCart}
                ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;