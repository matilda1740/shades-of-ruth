import React from 'react'
import './Sidebar.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { EmojiEmotionsOutlined, ShoppingBasketRounded, SearchRounded, FavoriteBorderRounded, SortOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
// import {getproductTotal} from './reducer'

export default function Sidebar() {

    const [ {wishlist, cart}] = useStateValue();
    return (
        <div className="sidebar_main">
            <div className="sidebar_top">
                <Link to="/cart">
                    <span className="store_badge">
                        <ShoppingBasketRounded className="sidebar_icons notifications" />
                        {
                            cart?.length !== 0 ? 
                            <span className="num_notif">{cart?.length}</span>
                            :<span className="no_badge"></span>
                        }
                    </span> 
                </Link>
                <Link to="/wishlist">
                    <span className="store_badge">
                        <FavoriteBorderRounded className="sidebar_icons notifications" />
                        {
                            wishlist?.length !== 0 ? 
                            <span className="num_notif">{wishlist?.length}</span>
                            :<span className="no_badge"></span>
                        }
                    </span>
                </Link>

                <Link to="/reviews">
                <EmojiEmotionsOutlined
                className="sidebar_icons notifications" />
                </Link>
                {/* <Link to="/search">
                <SearchRounded className="sidebar_icons"/> 
                </Link> */}
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
