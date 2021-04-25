import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './MobileNav.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {  MenuRounded, FavoriteBorderRounded , HomeRounded, ShoppingCartRounded, ShoppingBasketRounded} from '@material-ui/icons';
import { useStateValue } from './StateProvider';
import {getproductTotal} from './reducer'
 
export default function MobileNav() {
    const [ {wishlist, cart}] = useStateValue();
    
    return (
        <section className="mobile_nav_section">

            <NavLink to="/"><HomeRounded/><h5>HOME</h5></NavLink>

            <NavLink to="/products"><ShoppingCartRounded/><h5>SHOP</h5></NavLink>
            <NavLink to="/cart">
                <span className="store_badge">
                <ShoppingBasketRounded  className="notifications" />
                {
                cart?.length !== 0 ? 
                <span className="num_notif"> {getproductTotal(cart)}</span>
                :<span className="no_badge"></span>
                }
                </span>                 
                <h5>CART</h5>
            </NavLink>
            
            <NavLink to="/wishlist">                   
                <span className="store_badge">
                <FavoriteBorderRounded className="notifications" />
                {
                    wishlist?.length !== 0 ? 
                    <span className="num_notif">{wishlist?.length}</span>
                    :<span className="no_badge"></span>
                }
                </span>
                <h5>WISHLIST</h5>
            </NavLink>
            
            <a href="https://api.whatsapp.com/send?phone=254790877635&text=Hello" className = "mobile_nav_btn_div">
                <div className="mobile_nav_btn user_account_btn">
                <FontAwesomeIcon icon={faWhatsapp} /> 
                <p>CONTACT US</p>
                </div>
            </a>         
        </section>
    )
}
