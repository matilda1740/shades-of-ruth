import React, { useEffect } from 'react'
import "./Header.css"
import { Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';

import { EmojiEmotionsOutlined, FavoriteBorderRounded , ShoppingBasketRounded, ExpandMoreRounded, ExpandLessRounded, MenuRounded } from '@material-ui/icons';
import { useState } from 'react';
import {getproductTotal} from './reducer'
import Search from './Search'
export default function Header({products}) {

    const [ {wishlist, cart}] = useStateValue();
    const [mobileNav, setMobileNav] = useState(false);
    const mobileMenu = document.querySelector(".mobile_nav_div")

    useEffect( () => {window.screen.width <= 768 ? setMobileNav(true) : setMobileNav(false)}, [])
    window.addEventListener( "resize", e => window.screen.width <= 768 ? setMobileNav(true) : setMobileNav(false))

    const displayMobileMenu = (e) => {
        // mobileMenu.classList.remove("hidden");
        mobileMenu.classList.toggle("hidden");

        // console.log(e.target.innerHTML)
    }

    return (
        <div className="header">
            <Link to="/" className="a_brandName">
                <img src="./images/brand2.png" alt="Shades of Ruth" />
            </Link>

            {
                mobileNav ? 
                <div className="mobile_nav_parent">
                    <MenuRounded className="mobile_menu nav_icons" onClick={displayMobileMenu}/>
                </div>
                :
                <div className="navigation">
                <Search />

                <div className="nav_dropdown">
                    <Link to="/products">
                    <div className="nav_lips">
                        <p className="trigger_show" >Lipsticks</p>
                        <div className="show_lips"> 
                        {products &&
                            products.map( item => (
                            item.type === "Lipsticks" &&
                            <div className="dropdown_products" key={item.id}>
                            <p>{item.name}</p>
                            </div>
                        ))
                        }
                        </div>
                    </div>
                    </Link>

                    <Link to="/products">
                    <div className="nav_eyes">
                        <p  className="trigger_show">Shadows</p>
                        <div className="show_eyes"> 
                        {   products &&
                            products.map( item => (
                                item.type === "Eye-Shadows" &&
                                <div className="dropdown_products" key={item.id}>
                                <p>{item.name}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    </Link>                       
                </div>
            </div>                
            }

            <div className="header_icons_div">
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

                <Link to="/user" className="user_account_btn">
                    {/* CHECK IF USER SIGNED IN */}
                    <EmojiEmotionsOutlined />
                    <p>Hello, Guest</p>
                </Link>
            </div>

            <div className="mobile_nav_div hidden">
                <Link to="/"><h5>Home</h5></Link>
                <Link to="/products"><h5>Shop</h5></Link>
                <Link to="/user"><h5>My Account</h5></Link>
            </div>
        </div>
    )
}
