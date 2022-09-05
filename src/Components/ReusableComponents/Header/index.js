import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link, useHistory} from 'react-router-dom';
import { useStateValue } from './StateProvider';
// import {getproductTotal} from './reducer'
// import Search from './Search'
import MobileNav from './MobileNav';

import { EmojiEmotionsOutlined, FavoriteBorderRounded , ShoppingBasketRounded, ExpandMoreRounded, ExpandLessRounded, MenuRounded, CloseRounded } from '@material-ui/icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export default function Header({products}) {

    const [ {wishlist, cart}] = useStateValue();
    const [open, setOpen] = useState(false);
    const mobileMenu = document.querySelector(".mobile_nav_container")

    const history = useHistory();

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
    useEffect(() =>  history.listen((location) => open && onURLChange(), [history]) )

    return (
        <section className="header">
            <Link to="/" className="a_brandName">
                <img src="./images/brand2.png" alt="Shades of Ruth" />
            </Link>

            <div className="mobile_nav_parent">
                <div className="menuIcon" onClick={displayMobileMenu}>
                { 
                open ? 
                <CloseRounded className="nav_icons x_icon" />
                :
                <MenuRounded className="nav_icons m_icon" />
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

                <div className="nav_dropdown">
                    <Link to="/lipsticks" className="nav_lips">
                        <p className="trigger_show" >Lipsticks</p>
                        {/* <div className="show_lips"> 
                        {products &&
                            products.map( item => (
                            item.type === "Lipsticks" &&
                            <div className="dropdown_products" key={item.id}>
                            <p>{item.name}</p>
                            </div>
                        ))
                        }
                        </div>   */}
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

                    {/* <Link to="/user" > */}
                        {/* CONTACT - ROUND 0NE */}
                    <a href="https://api.whatsapp.com/send?phone=254790877635&text=Hello" className = "sidebar_social" target="_blank" rel="noreferrer">                
                    <div className="user_account_btn">
                    <FontAwesomeIcon icon={faWhatsapp} /> 
                    <p>CONTACT US</p>
                    </div>
                    </a>                    
                        {/* SIGNED IN - ROUND TWO */}
                        {/* <EmojiEmotionsOutlined />
                        <p>Hello, Guest</p> */}
                    {/* </Link> */}
                
                </div>

            </section> 
            
            <div className="mobile_nav_container closing">
                <MobileNav /> 
            </div>
        </section>
    )
}
