import React from 'react'
import "./Header.css"
// import Search from './Search';

import { Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

import { EmojiEmotionsOutlined, FavoriteBorderRounded, ShoppingBasketRounded, ExpandMoreRounded, ExpandLessRounded } from '@material-ui/icons';
import { useState } from 'react';

import {getproductTotal} from './reducer'

export default function Header({products}) {

    const [ {wishlist, cart}] = useStateValue();
    const [lipActive, setLipsActive] = useState(false);
    const [eyeActive, setEyeActive] = useState(false);


    const showLips = document.querySelector(".show_lips");
    const showEyes = document.querySelector(".show_eyes");


    const handleExpand = e => {
        if(!showEyes.classList.contains("hide_products")){
            showEyes.classList.add("hide_products");
        }
        if(e.target.parentNode.className === "nav_lips") {
            showLips.classList.toggle("hide_products");
            lipActive === false ? setLipsActive(true) : setLipsActive(false);
        }
    }

    const eyeExpand = e => {
        if(!showLips.classList.contains("hide_products")){
            showLips.classList.add("hide_products");
        }
        if(e.target.parentNode.className === "nav_eyes"){
            showEyes.classList.toggle("hide_products");
            eyeActive === false ? setEyeActive(true) : setEyeActive(false)
        }   
    }

    return (
        <div className="header">
            <Link to="/" className="a_brandName">
            <div className="brandName">
                <img src="./images/brand2.png" alt="Shades of Ruth" />
            </div>
            </Link>

            <div className="navigation">
                <div className="nav_dropdown">
                    <div className="nav_lips" onMouseOver={handleExpand}>
                        <p onClick={handleExpand}>Lipsticks</p>
                        {
                            lipActive ? <ExpandLessRounded className="nav_icons" onClick={handleExpand}/> : <ExpandMoreRounded className="nav_icons" onClick={handleExpand}/> 
                        }
                    </div>
                    <div className="show_lips hide_products">
                        <div className="show_triangle"></div>
                        {
                            products &&
                            products.map( item => (
                                item.type === "Lipsticks" &&
                                <Link to="/products"  key={item.id}>
                                <div className="dropdown_products">
                                    <p>{item.name}</p>
                                </div>
                                </Link>
                            ))
                        }
                    </div>

                <div className="nav_eyes" onMouseOver={eyeExpand}>
                    <p onClick={eyeExpand}>Eye-Shadows</p>
                    {
                        eyeActive ? <ExpandLessRounded onClick={eyeExpand} className="nav_icons"/> : <ExpandMoreRounded onClick={eyeExpand} className="nav_icons"/> 
                    }                        
                </div>
                <div className="show_eyes hide_products">
                    <div className="show_triangle"></div>
                    {
                        products &&
                        products.map( item => (

                            item.type === "Eye-Shadows" &&
                            <Link to="/products"  key={item.id}>
                            <div className="dropdown_products">
                                <p>{item.name}</p>
                            </div>
                            </Link>
                            
                        ))
                    }
                </div>

                </div>


            </div>

            <div className="header_icons_div">
                {/* <Search products={products}/> */}

                <Link to="/wishlist">
                    <span className="store_badge">
                        <FavoriteBorderRounded className="notifications" />
                        {
                            wishlist?.length !== 0 ? 
                            <span className="num_notif">{wishlist?.length}</span>
                            :<span className="no_badge"></span>
                        }
                    </span>
                </Link>

                <Link to="/cart">
                    <span className="store_badge">
                        <ShoppingBasketRounded  className="notifications" />
                        {
                        cart?.length !== 0 ? 
                        <span className="num_notif"> {getproductTotal(cart)}</span>
                        :<span className="no_badge"></span>
                        }
                    </span> 
                </Link>

                <Link>
                <EmojiEmotionsOutlined />
                </Link>
            </div>
        </div>
    )
}
