import React from 'react'
import "./Header.css"

import { EmojiEmotionsOutlined, FavoriteBorderRounded, SearchRounded, ShoppingBasketRounded } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import { useStateValue } from './StateProvider';

export default function Header() {

    const [ {wishlist, cart}] = useStateValue();

        return (
            <div className="header">
                <NavLink to="/">
                    <img
                        className="brandName"
                        src="./images/brand2.png" alt="Shades of Ruth" />
                </NavLink>

                <div className="navigation">

                </div>
                <div className="header_icons_div">
                    <span className="store_badge">
                        <Link to="/checkout">
                        <ShoppingBasketRounded  className="notifications" />
                        </Link>
                        {
                            cart?.length !== 0 ? 
                            <span className="num_notif">{cart?.length}</span>
                            :<span className="no_badge"></span>
                        }
                    </span> 
                    <span className="store_badge">
                        <Link to="/wishlist">
                        <FavoriteBorderRounded className="notifications" />
                        </Link>
                        {
                            wishlist?.length !== 0 ? 
                            <span className="num_notif">{wishlist?.length}</span>
                            :<span className="no_badge"></span>
                        }
                    </span>

                    <Link>
                    <EmojiEmotionsOutlined />
                    </Link>
                    <Link>
                    <SearchRounded />
                    </Link>                    
                </div>
            </div>
        )
    }
