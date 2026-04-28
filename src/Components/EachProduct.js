import React, { useEffect, useState } from 'react'
import './EachProduct.css'
import {NavigateBeforeRounded, NavigateNextRounded, FiberManualRecord, FavoriteBorderRounded  } from '@mui/icons-material';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { useParams } from 'react-router-dom'
import HomeProducts from './HomeProducts';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

import { addToCartAction } from './actions.js'
/* 
    GAME PLAN

    FUNCTIONALITY: 
    1. ROUTE DYNAMICALLY TO EACH PRODUCT PAGE

    DIV TWO 
    1. PRODUCT REVIEWS
    2. OTHER SUGGESTIONS
*/
export default function EachProduct(props) {
    const [ {cart, wishlist}, dispatch] = useStateValue();

    // let quantity = props.products.map( (item, e) => item.quantity = e.quantity)

    const [ isImageActive, setImageActive ] = useState(false);
   
    const {id } = props.url.match.params;
    let ID = parseInt(id);
    let myProduct = props.products.filter( (item) =>  item.id === id );
    let quantity = parseInt(myProduct.map(item => item.quantity));

    const handleIncreaseQty = (e) => {
        dispatch({
            type: "increase_qty",
            ID,
            quantity
        })         
     }
     const handleReduceQty = (e) => {
        dispatch({
            type: "reduce_quantity",
            ID,
            quantity
        })
     } 
    console.log(quantity, parseInt(id), id);

    const activeImage = (e) => {
        let topDiv = document.querySelector(".top_image_container");
        topDiv.innerHTML = `<img src=${e.target.src} alt=${e.target.id}/>`

    }
    return (
        <div className="each_product_page">
        {
            myProduct.map( (item) => (
                <div className="individual_product_cont" key={item.id}>
                <div className="image_container">
                    <div className="bottom_image_container">
                        <img src="/images/redwood_nobg.png" alt={item.name} id="1"
                            onClick={activeImage}
                        />
                        <img src={item.src} alt={item.name} id="2"
                            onClick={activeImage}
                        />
                        <img src={item.src} alt={item.name} id="3"
                            onClick={activeImage}
                        />
                    </div>                
                    <div className="top_image_container">
                    <img src={item.src} alt={item.name}/>
                    </div>

                </div>
                

                <div className="info_container">
                    <h2>{item.name}</h2>
                    <h3><CurrencyFormat
                        value={item.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Ksh. '} /></h3>
                    <p>{item.description}{item.description}{item.description}</p>
                    {/* Number of reviews */}

                    {/* Shades */}
                    <p>Shades</p>
                    {/* <select className="color_selection">
                        <option value="intentions">Red</option>
                        <option value="redwood">Redwood</option>
                        <option value="plum">Plum</option>
                        <option value="rose">Rose</option>
                        <option value="ruby">Ruby</option>
                    </select> */}
                    {/* <form action="" className="select_shade">
                        {
                        item.type === "Lipsticks" && */}
                        <div className="shade_option">
                        <FiberManualRecord className="shade_icon icon_redwood"/>
                        <span>{item.name}</span>

                        </div>
                        {/* }                        
                    </form> */}
                    <div className="each_prod_qty_div">
                    <h4>Quantity</h4>
                    <NavigateBeforeRounded className="qty_icons"
                    onClick={handleReduceQty}/>
                    <span>{quantity}</span>
                    <NavigateNextRounded className="qty_icons" onClick={handleIncreaseQty}/>
                    </div>
                    {/* Quantity */}
                    <button className="btns each_prod_btn">ADD TO CART</button>
                    <div className="bottom_info_container">
                        <button className="btns">
                            <FavoriteBorderRounded  className="fav_icon product_info_icons"/> 
                        ADD TO WISHLIST</button>
                        <a href="https://www.instagram.com/shadesofruth/" className = "social" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/shadesofruth/" className = "social" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=254795360960&text=link" className = "social" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>                    
                    </div>
                </div>
                </div>
            ))
        }
        </div>
    )
}
