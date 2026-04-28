import React from 'react'
import { useNavigate } from 'react-router';
import styled from "styled-components";
import Button from '../Button';
import { ChevronRightRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const BreadcrumbsStyle = styled.div`
    width: 100%;
    margin: 12px 0px 4px 0;

    &, .breadcrumb {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    * { color: rgba(244, 244, 244, 0.5); }
    .breadcrumb{
        width: fit-content;
        svg { font-size: 16px; margin: 0px 8px;}
    }
    .active { a { color: #f4f4f4; }}
`;

const breadcrumbs = {
    account: [
        <Link to="/">Home</Link>,
        <Link to="/account">Account</Link>,        
    ],
    users: [
        <Link to="/admin">Dashboard</Link>,
        <Link to="/admin/users">Users</Link>,
    ],
    usersDetails: [
        <Link to="/admin">Dashboard</Link>,
        <Link to="/admin/users">Users</Link>,
        <Link to="/admin/users/details">Details</Link>
    ],
    products: [
        <Link to="/admin">Dashboard</Link>,
        <Link to="/admin/products">Products</Link>,
    ],
    productsCreate: [
        <Link to="/admin">Dashboard</Link>,
        <Link to="/admin/products">Products</Link>,
        <Link to="/admin/products/create">Create</Link>
    ],
    orders: [
        <Link to="/admin">Dashboard</Link>,
        <Link to="/admin/orders">Orders</Link>,
    ],    
    ordersDetails: [
        <Link to="/admin">Dashboard</Link>,
        <Link to="/admin/orders">Orders</Link>,
        <Link to="/admin/orders/details">Details</Link>,
    ],  
    invoices: [
        <Link to="/admin">Dashboard</Link>,
        <Link to="/admin/invoices">Invoices</Link>,
    ],
    invoicesDetails: [
        <Link to="/admin">Dashboard</Link>,
        <Link to="/admin/invoices">Invoices</Link>,
        <Link to="/admin/invoices/details">Details</Link>,
    ], 
    locations: [
        <Link to="/admin">Dashboard</Link>,
        <Link to="/admin/locations">Locations</Link>,
    ], 
};

export default function Breadcrumbs({type}) {
    
return (
    <BreadcrumbsStyle>
    {   breadcrumbs[type]?.map( (crumb, i) => (
            <div className={i === breadcrumbs[type]?.length -1 ? "breadcrumb active" : "breadcrumb"} key={i}> 
                {crumb} 
                {i !== breadcrumbs[type]?.length -1 && <ChevronRightRounded/> }
            </div>
        ))
    }
    </BreadcrumbsStyle>

)
}
