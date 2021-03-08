import React, { useState } from 'react'
import './CartProduct.css'
import {DeleteRounded, NavigateBeforeRounded, NavigateNextRounded} from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

export default function CartProduct({id, type, name, image, description, price, quantity}) {

    const [ {cart, wishlist}, dispatch] = useStateValue();

// const removeFromCart = (id, quantity) => {
//     dispatch({
//         type: "remove_from_cart",
//         id,
//         quantity
//     });
// };

     const handleIncreaseQty = (e) => {
        dispatch({
            type: "increase_qty",
            id,
            quantity
        })         
     }
     const handleReduceQty = (e) => {
        dispatch({
            type: "reduce_quantity",
            id,
            quantity
        })
     }
    // console.log("Subtotal Increase", price);

    return (
        <section className="cart_product">
            <div className="wishlist_left checkout_left">
            <img src={image}alt={name}/>
            </div>
            <div key={id} id={id} className="wishlist_right checkout_right">
                <h3 className="item_name">{name}</h3>
                <div className="cart_quantity_div">
                    <h3>Quantity</h3>
                    <NavigateBeforeRounded className="list_icons"
                    onClick={handleReduceQty}/>
                    <span>{quantity}</span>
                    <NavigateNextRounded className="list_icons" onClick={handleIncreaseQty}/>
                </div>
                { window.location.pathname === '/checkout' && 
                    <span className="item_price"><strong>Ksh. {price * quantity}</strong></span>
                }
            </div>

        </section>
    )
}
