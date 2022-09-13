import { CasesRounded, FavoriteRounded, MeetingRoomRounded, PersonPinCircleOutlined, ShoppingCartRounded } from '@mui/icons-material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../../../contexts/AuthContext';
import ValueTag from '../../ReusableComponents/ValueTag';
import { SidebarStyle } from '../account.style';

export default function Sidebar({accountModule, handleAccountModule}) {

    const { logoutUser } = useAuth(); 
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser(); 
        navigate("/"); 
    }
    
    return (
    <SidebarStyle>
    {/* <div className="profile_photo_div"></div> */}
    <div className="sidebar_bottom">
        <div 
            className={accountModule === "profile" ? "sidebar_parts active" : "sidebar_parts"} onClick={handleAccountModule("profile")}>
            <PersonPinCircleOutlined />
            <p>Profile</p>
        </div>
        <div 
            className={accountModule === "orders" ? "sidebar_parts active" : "sidebar_parts"}  onClick={handleAccountModule("orders")}>
            <CasesRounded />
            <p>Order History</p>
            <ValueTag value={0} />
        </div>
        <div 
            className={accountModule === "cart" ? "sidebar_parts active" : "sidebar_parts"}  onClick={handleAccountModule("cart")}>
            <ShoppingCartRounded />
            <p>Cart Items</p>
            <ValueTag value={0} />
        </div>
        <div 
            className={accountModule === "wishlist" ? "sidebar_parts active" : "sidebar_parts"}  onClick={handleAccountModule("wishlist")}>
            <FavoriteRounded />
            <p>Wishlist</p>
            <ValueTag value={0} />
        </div>
        <div className="sidebar_parts secondary" onClick={handleLogout}>
            <MeetingRoomRounded />
            <p>Logout</p>
        </div>
    </div>
    </SidebarStyle>
    );
}