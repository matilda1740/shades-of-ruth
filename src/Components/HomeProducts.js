import React, { useState } from 'react'
import './HomeProducts.css'
import { ShoppingBasketRounded, FavoriteBorderRounded , FavoriteRounded,DeleteRounded  } from '@material-ui/icons'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
export default function HomeProducts({id, type, name, image, description, price, quantity}) {

    const [{cart, wishlist}, dispatch]  = useStateValue(); 
    const [addedToList, setAddedToList] = useState(false);
    const [addedCart, setAddedToCart] = useState(false);

    const addToCart = (e) => {
        dispatch({
            type: "add_to_cart", 
            item: {
                id,
                type,
                name,
                image,
                description,
                price,
                quantity,
            },
        })
    }
    
    const addToWishlist = (e) => {
        dispatch({
            type: "add_to_wishlist", 
            item: {
                id,
                type,
                name,
                image,
                description,
                price,
            },
        })
        setAddedToList(true);
        e.target.classList.add("faved_product")
    }

    const removeFromWishlist = (e) => {
        e.target.classList.remove("faved_product")
        dispatch({
            type: "remove_from_wishlist",
            id
        });
        setAddedToList(false);
    };

    // REMOVE FROM CART OPTION ....
    return (
            <div key={id} className="product_info">
                <Link to={`/products/product_${id}`}>        
                <img src={image} alt={name}/>
                </Link>
                <div className="product_purchase">
                    <h4>{name}</h4>
                    { addedToList ?                                   
                    <FavoriteRounded className="fav_icon faved_product"
                    onClick={removeFromWishlist} />  :
                    (window.location.pathname === "/products") ?
                    <FavoriteBorderRounded  className="fav_icon product_info_icons"
                    onClick={addToWishlist} /> 
                    : (window.location.pathname === "/wishlist") && 
                    <DeleteRounded className="product_info_icons" onClick={removeFromWishlist} />
                    }
                    <ShoppingBasketRounded
                    className="product_info_icons"
                    onClick={addToCart}
                    /> 
                </div>
                <h4><CurrencyFormat
                        value={price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Ksh. '} />
                </h4>
                <p>{description}</p>
            </div>
    )
}
