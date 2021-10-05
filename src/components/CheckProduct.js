import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckProduct({ id, image, title, price, rating }) {
    const[state,dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutproduct_image" src={image} alt="This is image" />
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price"> <small>$</small> <strong>{price}</strong> </p>
                <div className="checkoutproduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove From Basket</button>
            </div>
        </div>

    )
}

export default CheckProduct
