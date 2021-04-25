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
            document.querySelector(".num_cart").style = "background-color:#dec3c3";
            setIsCheckoutActive(false)
            setIsCompletionActive(false)
        }else if (window.location.pathname === "/checkout"){
            setIsCartActive(true)
            setIsCheckoutActive(true)
            document.querySelector(".num_cart").style = "background-color:#dec3c3";            
            document.querySelector(".num_checkout").style = "background-color:#dec3c3";
            setIsCompletionActive(false)
        }else if (window.location.pathname === "/order_success"){
            document.querySelector(".num_cart").style = "background-color:#dec3c3";            
            document.querySelector(".num_checkout").style = "background-color:#dec3c3";
            document.querySelector(".num_payment").style = "background-color:#dec3c3";
            setIsCartActive(true)
            setIsCheckoutActive(true)
            setIsCompletionActive(true)
        }else if (window.location.pathname === "/order_failure"){
            document.querySelector(".num_cart").style = "background-color:#dec3c3";            
            document.querySelector(".num_checkout").style = "background-color:#dec3c3";
            document.querySelector(".num_payment").style = "background-color:red";

            setIsCartActive(true)
            setIsCheckoutActive(true)
            setIsCompletionActive(true)
        }
    }

    useEffect( () => {
    checkPageActive()
    }, [])

    return (
        <div className="process_container">
            <div className="each_selection">
                <div className="number_cont num_cart">1</div>
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
                <div className="number_cont num_checkout">2</div>
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
                <div className="number_cont num_payment">3</div>
                {
                    isCompletionActive ?
                        <Link to="/order_success">
                        <p>Order Confirmation</p>
                        </Link>
                    :   <p>Order Confirmation</p>
                }

            </div>
        </div>
    )
}
