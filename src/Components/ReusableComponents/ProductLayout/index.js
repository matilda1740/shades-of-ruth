import React, { useEffect, useState } from 'react'

import { useStateValue } from '../../../redux/StateProvider';
import { ProductLayoutStyle } from './product.layout.style'

import { FavoriteBorderRounded , FavoriteRounded, DeleteRounded, AddShoppingCartRounded, ShoppingCartRounded  } from '@mui/icons-material'

import CurrencyFormat from 'react-currency-format';


export default function ProductLayout({id, type, name, image, description, price, quantity}) {

    const {cartListState, cartListDispatch}  = useStateValue(); 
    const {cart, wishlist} = cartListState;

    const [addedToList, setAddedToList] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);

    const addToCart = (e) => {
        cartListDispatch({
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

    const removeFromCart = (e) => {
        cartListDispatch({
            type: "remove_from_cart",
            id,
            quantity
        });
        setAddedToCart(false);
    };  
    
    const handleIncreaseQty = (e) => {
        cartListDispatch({
            type: "increase_qty",
            id,
            quantity
        })         
    }
    
    const handleReduceQty = (e) => {
        cartListDispatch({
            type: "reduce_quantity",
            id,
            quantity
        })
    }

    const addToWishlist = (e) => {
        cartListDispatch({
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
        cartListDispatch({
            type: "remove_from_wishlist",
            id,
            quantity
        });
        setAddedToList(false);
    };


    useEffect(() => {
        let itemInList = wishlist.find( product => product.id === id );
        itemInList ? setAddedToList(true) : setAddedToList(false)
        let itemInCart = cart.find( product => product.id === id );
        itemInCart ? setAddedToCart(true) : setAddedToCart(false)
    }, [])
    return (
        <ProductLayoutStyle>
        <img src={image} alt={name}/>

        <div className="product_description">
            <div className="product_purchase">
                <h4>{name}</h4>
                { 
                    addedToList 
                    ?                                   
                    <FavoriteRounded className="product_info_icons faved_product"
                    onClick={removeFromWishlist} />  
                    :
                    <FavoriteBorderRounded className="product_info_icons"
                    onClick={addToWishlist} />                      
                }   
                {
                    !addedToCart ?
                    <AddShoppingCartRounded className="product_info_icons" onClick={addToCart}/> 
                    : <ShoppingCartRounded className="product_info_icons" onClick={removeFromCart} /> 
                }               

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

        </ProductLayoutStyle>
    )
}
