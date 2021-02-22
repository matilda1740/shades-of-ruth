import React, { useState } from 'react'
import './HomeProducts.css'
import { ShoppingBasketRounded } from '@material-ui/icons'
import { useStateValue } from './StateProvider'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import CurrencyFormat from 'react-currency-format';

export default function HomeProducts({id, type, name, image, description, price}) {
    
    const [ {cart, wishlist}, dispatch]  = useStateValue(); 
    const [addedToList, setAddedToList] = useState(false);

    const addToCart = (e) => {
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

    return (
            <div key={id} className="product_info">
                <img src={image} alt={name}/>
                <div className="product_purchase">
                    <h4>{name}</h4>
                    { addedToList ?                                   <FavoriteBorderRoundedIcon className="fav_product"
                    onClick={removeFromWishlist} />  :
                    <FavoriteBorderRoundedIcon className="fav_product"
                    onClick={addToWishlist} /> 
                    }
                    <ShoppingBasketRounded
                    className="buy_product"
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
