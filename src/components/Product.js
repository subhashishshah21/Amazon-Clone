import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
export default function Product(props) {
    const {id,title,image,price,rating}=props;
    const[state,dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product_price"><small>$</small><strong>{props.price}</strong></p>
                <div className="product_rating">
                    {
                        Array(props.rating).fill().map((_,i)=>(
                            <p>⭐</p>
                        ))
                    }
                    
                </div>
            </div>
            <img src={props.image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
