import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckProduct from './CheckProduct'


export default function Checkout() {
    const[{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__add" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className="checkout_title">{user?user?.email:"Your"}'s Basket</h2>
                    {
                        basket.map(item=>(
                            <CheckProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))


                    }
                </div>
            </div>

            <div className="checkout__right">
                {/* Subtotal component */}
                <Subtotal />
            </div>
        </div>

    )
}
