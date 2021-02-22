import React, { useState } from 'react'
import './CartProduct.css'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

export default function CartProduct({id, type, name, image, description, price}) {

    const [ {cart, wishlist}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: "remove_from_cart",
            id
        });
     };
    
    // const addToWishlist = () => {
    //     dispatch({
    //         type: "add_to_wishlist", 
    //         item: {
    //             id,
    //             type,
    //             name,
    //             image,
    //             description,
    //             price
    //         }
    //     })
    // };

    return (
        <section className="cart_product">
            <div className="wishlist_left payment_left">
                <img src={image}alt={name}/>
            </div>
            <div key={id} id={id} className="wishlist_right payment_right">
                <h3>{name}</h3>
                <p><strong>
                    <CurrencyFormat
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Ksh. '}
                    />
                </strong></p>
                <DeleteRoundedIcon
                className="list_icons"
                onClick={removeFromCart}
                /> 
            </div>
        </section>
    )
}
