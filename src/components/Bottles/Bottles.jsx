import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart } from "../../localStorage/LocalStorage";
import Cart from "../Cart/Cart";

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
        // console.log(bottles.length);
        if(bottles.length){
            const storedCart = getStoredCart()
            // console.log(storedCart, bottles);

            const savedCart = []
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            console.log(savedCart);
            setCart(savedCart)
        }
    },[bottles])

    const AddBottleToCart = getBottle => {
        const newCart = [...cart, getBottle]
        setCart(newCart)
        addToLS(getBottle.id)
    }

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <Cart key={cart.id} getCart={cart}></Cart>
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