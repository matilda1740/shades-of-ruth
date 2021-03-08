import React from 'react'
import './Process.css'

import { NavigateNextRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Process({chekoutActive}) {
    console.log("URL: ", window.location.pathname)
    // console.log("WINDOW: ", window
    // )


    return (
        <div className="process_container">
            <div className="each_selection">
                <div className="number_cont">1</div>
                <Link to="/cart" >
                <p>Cart Page</p>
                </Link>
            </div>

            <NavigateNextRounded className="show_process_icon"/>

            <div className="each_selection">
                <div className="number_cont">2</div>
                {
                    chekoutActive ? 
                    <Link to="/checkout" >
                    <p>Checkout Page</p>
                    </Link>
                    : 
                    <p>Checkout Page</p>
                }
                
            </div>
                
            <NavigateNextRounded className="show_process_icon"/>

            <div className="each_selection">
                <div className="number_cont">3</div>
                {/* IF SOMETHING IN STATE IS ACTIVE THEN ACTIVATE LINK ELSE NO*/}
                <Link to="/confirm">
                <p>Payment Confirmation</p>
                </Link>
            </div>
        </div>
    )
}
