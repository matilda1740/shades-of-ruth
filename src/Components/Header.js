import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from "../firebase";
import Search from './Search'
import MobileNav from './MobileNav';

import { useStateValue } from '../redux/StateProvider';

import { EmojiEmotionsOutlined, FavoriteBorderRounded , ShoppingBasketRounded, ExpandMoreRounded, ExpandLessRounded, MenuRounded, CloseRounded } from '@mui/icons-material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useNavigateSearch } from '../Hooks/useCustom';
import { getproductTotal } from '../redux/reducers/cartListReducer';


export default function Header({currentUser}) {

    const {cartListState, cartListDispatch}  = useStateValue(); 
    const {cart, wishlist} = cartListState;

    const [open, setOpen] = useState(false);
    const mobileMenu = document.querySelector(".mobile_nav_container")

    const navigateSearch = useNavigateSearch();

    const goToSearchParam = link => () => {
        navigateSearch("/products", {type: link});
    }
    let location = useLocation();

    const displayMobileMenu = () => {
        if( typeof(mobileMenu) !== "undefined" && mobileMenu!==null){
            if(mobileMenu.classList.contains("closing")) {
            mobileMenu.classList.remove("closing")
            setOpen(true)
            }else {
            mobileMenu.classList.add("closing")
            setOpen(false)
            }  
        }
    }

    const onURLChange = () => {
         if( typeof(mobileMenu) !== "undefined" && mobileMenu!==null){
            if(!mobileMenu.classList.contains("closing")) {
            mobileMenu.classList.add("closing")
            setOpen(false)
            } 
        }       
    }
    useEffect(() => {open && onURLChange()}, [location]) 

    return (
        <section className="header">
            <Link to="/" className="a_brandName">
                <img src="./images/brand2.png" alt="Shades of Ruth" />
            </Link>

            <div className="mobile_nav_parent">
                <div className="menuIcon" onClick={displayMobileMenu}>
                { 
                open ? <CloseRounded className="nav_icons x_icon" />
                : <MenuRounded className="nav_icons m_icon" />
                }
                </div>
                {/* <MenuRounded className="nav_icons" onClick={displayMobileMenu}/> */}
                <Link to="/cart" >
                <span className="store_badge">
                    <ShoppingBasketRounded  className="notifications nav_icons" />
                    {
                    cart?.length !== 0 ? 
                    <span className="num_notif"> {getproductTotal(cart)}</span>
                    :<span className="no_badge"></span>
                    }
                </span> 
                </Link>
            </div>                

            <section className="header_section_two_three">
                
                {/* SECTION TWO */}
                <div className="navigation">
                {/* <Search /> */}
                    <Link to="/products" className="nav_lips">
                        <p className="trigger_show" >Lipsticks</p>
                    </Link>
            

                    <Link to="/eye-shadows" className="nav_eyes">
                        <p  className="trigger_show">Eye-Shadows</p>
                        {/* <div className="show_eyes"> 
                        {   products &&
                            products.map( item => (
                                item.type === "Eye-Shadows" &&
                                <div className="dropdown_products" key={item.id}>
                                <p>{item.name}</p>
                                </div>
                            ))
                        }
                        </div> */}
                    </Link>                       
                    <Link to="/brushes" className="nav_eyes">
                        <p  className="trigger_show">Brushes</p>
                        {/* <div className="show_eyes"> 
                        {   products &&
                            products.map( item => (
                                item.type === "Eye-Shadows" &&
                                <div className="dropdown_products" key={item.id}>
                                <p>{item.name}</p>
                                </div>
                            ))
                        }
                        </div> */}
                    </Link>                   
                </div> 

                {/* SECTION THREE */}
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

                    
                    <Link to={currentUser ? "/profile" : "/login"} className="user_account_btn">
                        <EmojiEmotionsOutlined />
                        <p>Welcome, {currentUser ? currentUser.email : "Guest"}</p>
                    </Link>

                    {/* CONTACT - ROUND 0NE */}
                    {/* <a href="https://api.whatsapp.com/send?phone=254790877635&text=Hello" className = "sidebar_social" target="_blank" rel="noreferrer">                
                    <div className="user_account_btn">
                    <FontAwesomeIcon icon={faWhatsapp} /> 
                    <p>CONTACT US</p>
                    </div>
                    </a>                     */}
                
                </div>

            </section> 
            
            <div className="mobile_nav_container closing">
                {/* <MobileNav cart={cart} wishlist={wishlist} />  */}
            </div>
        </section>
    )
}
