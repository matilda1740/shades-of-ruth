import React, { useState } from 'react'
import './HomeProducts.css'
import { FavoriteBorderRounded , FavoriteRounded, DeleteRounded, AddShoppingCartRounded  } from '@material-ui/icons'
import { useStateValue } from './StateProvider'
import CurrencyFormat from 'react-currency-format';
import { useEffect } from 'react';
import { useRouter } from "../Hooks/useRouter"

export default function HomeProducts({id, type, name, image, description, price, quantity}) {

    const [{cart, wishlist}, dispatch]  = useStateValue(); 
    const [addedToList, setAddedToList] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

    const router = useRouter();

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
        setAddedToCart(true);
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
                quantity
            },
        })
        setAddedToList(true);
        e.target.classList.add("faved_product")
    }

    const removeFromWishlist = (e) => {
        e.target.classList.remove("faved_product")
        dispatch({
            type: "remove_from_wishlist",
            id,
            quantity
        });
        setAddedToList(false);
    };

    const removeFromCart = (e) => {
        dispatch({
            type: "remove_from_cart",
            id,
            quantity
        });
        setAddedToCart(false);
    };  
    
    const cartEvents = () => !addedToCart ? addToCart() : removeFromCart();

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

    useEffect(() => {
        let itemInList = wishlist.find( product => product.id === id );
        itemInList ? setAddedToList(true) : setAddedToList(false)
    }, [])
    return (
    <div key={id} className="product_info" 
    onClick={(e) =>
    router.replace(
        {
            pathname: `products/${id}`,
            query: { id: id}
        }
    ) }>
        <img src={image} alt={name}/>
        <div className="product_purchase">
            <h4>{name}</h4>
            { 
                addedToList 
                ?                                   
                <FavoriteRounded className="fav_icon faved_product"
                onClick={removeFromWishlist} />  
                :
                (window.location.pathname === "/wishlist") 
                ? 
                <DeleteRounded className="product_info_icons" onClick={removeFromWishlist} />
                :
                <FavoriteBorderRounded  className="fav_icon product_info_icons"
                onClick={addToWishlist} />                      
            }                  
            <AddShoppingCartRounded
                className="product_info_icons"
                onClick={cartEvents}
                />  
        </div>

        <div className="product_purchase product_price">
            <h4 className=""><CurrencyFormat
            value={price}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Ksh. '} /></h4> 
        </div>                 
        <p>{description}</p>
        
    </div>
    )
}
