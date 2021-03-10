import React from 'react'
import './Completion.css'
// import CommuteRoundedIcon from '@material-ui/icons/CommuteRounded';
import { useState } from 'react';
import { useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { CardTravelRounded, CommuteRounded, LocalShippingRounded } from '@material-ui/icons';

export default function Completion() {


    // ANIMATIONS - PICKUP AND DELIVERY
    // const pickupMouseOver = () => {}
    // const pickupMouseOut = () => {}

    // const deliveryMouseOver = () => {}
    // const deliveryMouseOut = () => {}

    // REMEMBER TO MOVE PICK UP AND DELIVER DIV FROM FORM TO THE SIDE TO 
    // UNDER PRODUCT PREVIEW AND
    // AFTER THIS DIV INCREASE = SUBTOTAL + P/D
    // THEN: PAYMENT OPTIONS
    // THEN PLACE ORDER BUTTON


    return (
        <div className="complete_transaction_page">
            <div className="error_message">
                <p>Payment</p>
                {/* <h1 className="error_text">Oops! Page Not Found</h1> */}
                {/* <p className="error_text">ⓘ The page you are looking for cannot be found</p>
                <Link to="/">
                    <button className="btns error_btn">Go to Home Page</button>
                </Link> */}
            </div>
            {/* 
            FORM 
            IF USER LOGGED IN GENERATE DELIVERY AMOUNT FROM INFORMATION
            
            ELSE
            
            ENTER ADDRESS INFO ONLY

            I.E 

            ENTER EMAIL ADDRESS
            FULL NAME
            PHONE NUMBER
            DELIVERY ADDRESS
            COUNTY
            DELIVERY REQUESTS

            ? CREATE ACCOUNT WITH US

            DEVELOPER: SEND POST REQUEST TO SoR WHATSAPP OR EMAIL WITH ALL THE ABOVE INFORMATION 
            
            AND 

            CHOOSE PAYMENT METHOD

            1. PAY CASH ON DELIVERY 
            2. PAY ONLINE: 2 METHODS: MPESA AND CARD

            MPESA:

            LITTLE MPESA DIV THAT:

            1. BUY GOODS AND SERVICES
            2. TILL NUMBER 
            3. ENTER TOTAL AMOUNT 
            4. PIN 
            5. CHECK BUSINESS NAME  MATCHES: --- 

            OR 

            CHOOSE GET MPESA PROMPT
            1. ENTER PHONE NUMBER 
            2. DEV: PUSH NUMBER TO PARTYA IN JSON 
            3. USER: ENTER PIN
            4. CONFIRMATION TEXT

            STRIPE: PAYMENTS WITH CARDS

                {/* Insert icons - make them clickable */}
                {/* Pickup - straight to checkout - select pick up station*/}
                {/* Delivery - delivery page and add delivery charges to subtotal */}
                {/* Generate form that let's us know where it needs to go  
            FAILURE OR SUCCESSFULL PAYMENT MESSAGE

            <div className="checkout_message">
                <div  className="pay_success">
                    <h4>Checkout Completed Successfully</h4>
                    <p>Thank you for Shopping with us.</p>
                </div>
                <div  className="pay_failure">
                    <h4>Sorry checkout failed</h4>
                </div>
            </div>  
            */}

        </div>
    )
}
