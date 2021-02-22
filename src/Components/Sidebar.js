import React from 'react'
import './Sidebar.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { EmojiEmotionsOutlined, ShoppingBasketRounded, SearchRounded, FavoriteBorderRounded, SortOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

export default function Sidebar() {

    const [ {wishlist, cart}] = useStateValue();
    return (
        <div className="sidebar_main">
            <div className="sidebar_top">
                <span className="store_badge">
                    <Link to="/checkout">
                    <ShoppingBasketRounded className="sidebar_icons notifications" />
                    </Link>
                    {
                        cart?.length !== 0 ? 
                        <span className="num_notif">{cart?.length}</span>
                        :<span className="no_badge"></span>
                    }
                </span> 
                <span className="store_badge">
                    <Link to="/wishlist">
                    <FavoriteBorderRounded className="sidebar_icons notifications" />
                    </Link>
                    {
                        wishlist?.length !== 0 ? 
                        <span className="num_notif">{wishlist?.length}</span>
                        :<span className="no_badge"></span>
                    }
                </span>
                <Link to="/reviews">
                <EmojiEmotionsOutlined
                className="sidebar_icons" />
                </Link>
                <Link to="/search">
                <SearchRounded className="sidebar_icons"/> 
                </Link>
            </div>
            <div className="sidebar_middle">
                <SortOutlined className="sidebar_icons"/>
            </div>
            <div className="sidebar_bottom">
                <a href="https://www.instagram.com/shadesofruth/" className = "sidebar_social">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/shadesofruth/" className = "sidebar_social">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=254795360960&text=link" className = "sidebar_social">
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
            </div>
        </div>
    )
}
