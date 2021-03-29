import React, { useEffect } from 'react'
import './EachProduct.css'

import { useParams } from 'react-router-dom'
import HomeProducts from './HomeProducts';
import CurrencyFormat from 'react-currency-format';

/* 
    GAME PLAN

    FUNCTIONALITY: 
    1. ROUTE DYNAMICALLY TO EACH PRODUCT PAGE

    FRONTEND
    DIV ONE
    LHS: 
    1. FLOATING PRODUCT IMAGE 
    2. BELOW MAIN IMAGE - IMAGE CAROUSEL

    RHS: 
    1. PRODUCT NAME 
    2. PRODUCT PRICE 
    3. PRODUCT DESCRIPTION
    4. PRODUCT COLOUR
    5. TOGGLE COLOUR BUTTON
    6. ADD TO CART BUTTON
    7. ADD TO WISHLIST
    

    DIV TWO 
    1. PRODUCT REVIEWS
    2. OTHER SUGGESTIONS
*/
export default function EachProduct(props) {
    const {id } = props.url.match.params;
    let myProduct = props.products.filter( (item) =>  item.id === id );
    console.log(myProduct);
    return (
        <div className="each_product_page">
        {
            myProduct.map( (item) => (

                <div className="individual_product_cont" key={item.id}>
                <div className="image_container">
                    <img src={item.src} alt={item.name}/>
                    {/* IMAGE CAROUSEL */}
                </div>
                <div className="info_container">
                    <h2>{item.name}</h2>
                    <h3><CurrencyFormat
                        value={item.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Ksh. '} /></h3>
                    {/* Number of reviews */}
                    <p>{item.description}{item.description}{item.description}</p>
                    {/* Various Shades */}
                    <select className="color_selection">
                        <option value="intentions">Red</option>
                        <option value="redwood">Redwood</option>
                        <option value="plum">Plum</option>
                        <option value="rose">Rose</option>
                        <option value="ruby">Ruby</option>
                    </select>
                    {/* Quantity */}
                    <button className="btns each_prod_btn">ADD TO CART</button>
                    <button className="btns each_prod_btn">ADD TO WISHLIST</button>


                </div>

                </div>
            ))
        }
        </div>
    )
}
