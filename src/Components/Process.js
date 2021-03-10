import React from 'react'
import './Process.css'

import { NavigateNextRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Process({chekoutActive, cartActive}) {
    const [ isCartActive, setIsCartActive] = useState(false);
    const [ isCheckoutActive, setIsCheckoutActive] = useState(false);
    const [ isCompletionActive, setIsCompletionActive] = useState(false);

    const checkPageActive = () => {
        if(window.location.pathname === "/cart") {
            setIsCartActive(true)
            setIsCheckoutActive(false)
            setIsCompletionActive(false)
        }else if (window.location.pathname === "/checkout"){
            setIsCartActive(true)
            setIsCheckoutActive(true)
            setIsCompletionActive(false)
        }else if (window.location.pathname === "/completion"){
            setIsCartActive(true)
            setIsCheckoutActive(true)
            setIsCompletionActive(true)
        }
    }
    // console.log("PROCESS CART ACTIVE: ", isCartActive);
    // console.log("PROCESS CHECKOUT ACTIVE: ", isCheckoutActive);
    // console.log("PROCESS COMPLETE ACTIVE: ", isCompletionActive);

    useEffect( () => {
    checkPageActive()
    }, [])

    return (
        <div className="process_container">
            <div className="each_selection">
                <div className="number_cont">1</div>
                {
                    isCartActive ? 
                        <Link to="/cart" >
                        <p>Cart Page</p>
                        </Link>
                    :
                        <p>Cart Page</p>
                }

            </div>

            <NavigateNextRounded className="show_process_icon"/>

            <div className="each_selection">
                <div className="number_cont">2</div>
                {
                    isCheckoutActive ? 
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
                {
                    isCompletionActive ?
                        <Link to="/confirm">
                        <p>Payment Confirmation</p>
                        </Link>
                    :   <p>Payment Confirmation</p>
                }

            </div>
        </div>
    )
}
