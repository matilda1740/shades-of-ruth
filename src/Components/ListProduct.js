import React from 'react'
import './ListProduct.css'
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { ShoppingBasketRounded } from '@material-ui/icons'

import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

export default function ListProduct({id, type, name, image, description, price}) {

        const [{cart, wishlist}, dispatch ] = useStateValue(); 

        const removeFromWishList = () => {
            dispatch({
                type: "remove_from_wishlist",
                id
            });
        };
        
        const addToCart = () => {
        dispatch({
            type: "add_to_cart", 
            item: {
                id,
                type,
                name,
                image,
                description,
                price
            }
        })
        };

    return (
        <section className="list_product">
            <div className="wishlist_left">
                <img src={image}alt={name}/>
            </div>

            <div className="wishlist_right">
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
                onClick={removeFromWishList}
                /> 
                <ShoppingBasketRounded 
                className="list_icons"
                onClick={addToCart}
                />
            </div>
        </section>
    )
}
