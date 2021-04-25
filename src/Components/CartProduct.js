// THIS PAGE CONTAINS CART PRODUCTS AND CHECKOUT PRODUCTS

import React, { useState } from 'react'
import './CartProduct.css'
import {AddRounded, RemoveRounded} from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

export default function CartProduct({id, type, name, image, description, price, quantity}) {

    const [ {cart, wishlist}, dispatch] = useStateValue();

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
    return (
        <section className="cart_product_container" key={id}>
        { 
            window.location.pathname === '/cart' ? 
            <div className="cart_product" key={id} id={id} >
                <div className="cart_item_left">
                <img src={image}alt={name}/>
                </div>
                <div className="cart_item_right">
                    <h3 className="item_name">{name}</h3>
                    <div className="cart_quantity_div">
                        <h3>Quantity</h3>
                        <RemoveRounded className="qty_icons"
                        onClick={handleReduceQty}/>
                        <span>{quantity}</span>
                        <AddRounded className="qty_icons" onClick={handleIncreaseQty}/>
                    </div>
                    <span className="item_price"><strong>Ksh. {price * quantity}</strong></span>
                </div>
            </div>
            :
            <div className="checkout_product_preview" key={id} id={id} >
                <img src={image}alt={name}/>
                <h4 className="item_name">{name}</h4>
                <div className="cart_quantity_div">
                    <h5>Quantity</h5>
                    <RemoveRounded className="qty_icons"
                    onClick={handleReduceQty}/>
                    <span>{quantity}</span>
                    <AddRounded className="qty_icons" onClick={handleIncreaseQty}/>
                </div>
                <span className="item_price"><strong>Ksh. {price * quantity}</strong></span>
            </div>
        }
        </section>
    )
}
