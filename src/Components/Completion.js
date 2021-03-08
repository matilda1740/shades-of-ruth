import React from 'react'
import './Completion.css'
// import CommuteRoundedIcon from '@material-ui/icons/CommuteRounded';
import { CardTravelRounded, CommuteRounded, LocalShippingRounded } from '@material-ui/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
export default function Completion() {

    const [pickup, setPickup] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [fee, setFee] = useState(0);

    useEffect( () => {
        // const pickupOptions = document.querySelector(".pickup_options");
        const deliveryOptions = document.querySelector(".delivery_options");

    })    
    const handlePickupOrDelivery = (e) => {
        try{
            if(e.target.classList.contains("delivery_pickup_cont")){
                if(e.target.children[1].classList.contains("pickup")){
                    delivery && setDelivery(false)
                    pickup ? setPickup(false) : setPickup(true)
                }else if(e.target.children[1].classList.contains("delivery") ){
                    pickup && setPickup(false) 
                    delivery ? setDelivery(false) : setDelivery(true)
                }else {
                    console.log("ERROR")
                }
            }
        }catch(error){
            console.log("ERROR", error)
        }
    }

    const getFee = (e) => {
        return pickup ? setFee(e.target.value) : delivery && setFee(e.target.value)
    }

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
            <form className="checkout_client_details" method="POST" action="">
                <h3>Checkout Details</h3>
                <p>Please provide the following information to facilitate delivery: </p>
                <div className="checkout_row_form">
                    <h5 className="login_labels">Full Name:</h5>
                    <input className="input_fields" type="text" required></input>
                </div>
                <div className="checkout_row_form">
                    <h5 className="login_labels">Phone Number:</h5>
                    <input className="input_fields" type="text" required></input>
                </div>
                <div className="checkout_row_form">
                    <h5 className="login_labels" >Email:</h5>
                    <input className="input_fields" type="text" id="email" required></input>
                </div>
                <div className="checkout_row_form">
                    <h5 className="login_labels" >Special Requests: </h5>
                    <textarea className="input_fields" type="text" id="email" rows="4" cols="60" required></textarea>
                </div>                
                <input type="checkbox" id="isNewMember"  name="isNewMember" value="Member"></input>
                <label for="isNewMember" className="login_labels">Would you like to sign up?</label>
            </form>

            <div className="delivery_pickup_container">
                <p>Do you prefer Pickup or Delivery? </p>
                <div className="checkout_delivery_options">
                    <div className="delivery_pickup_cont" onClick={handlePickupOrDelivery}>
                        <h3>Pick Up</h3>
                        <CardTravelRounded className="delivery_icon pickup"/>
                    </div>
                    <div className="delivery_pickup_cont" onClick={handlePickupOrDelivery}>
                        <h3>Delivery</h3>
                        <CommuteRounded className="delivery_icon delivery"/>
                    </div>
                </div>
                {
                    pickup ? 
                    <div className="delivery_pickup_options checkout_row_form">
                       <label className="login_labels">Select Pickup Station:</label>
                        <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFee}>
                            <option value="0" defaultValue>Location</option>
                            <option value="300">Someplace </option>
                            <option value="450">BMW</option>
                            <option value="650">Citroen</option>
                            <option value="432">Ford</option>
                        </select>                    
                    </div>
                    : delivery &&
                    <div className="delivery_pickup_options checkout_row_form">

                        <label className="login_labels">Select Delivery Location:</label>
                        <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFee}>
                            <option value="0" defaultValue>Location</option>
                            <option value="300">Audi </option>
                            <option value="450">BMW</option>
                            <option value="650">Citroen</option>
                            <option value="432">Ford</option>
                        </select>
                        {/* HERE SHOW DELIVERY AMOUNT ACCORDING TO OPTION SELECTED */}
                    </div>
                }
            </div>

            <div className="checkout_product_subtotal">
                <h4><strong>Order Total:</strong></h4>
                    <CurrencyFormat
                        renderText={ (value) => (
                            <p><strong>{`${value}`}</strong></p>
                        )}        
                        decimalScale={2}
                        value={fee}
                        thousandSeparator={true}
                        prefix={"Ksh. "}
                    />
            </div> 

            {/* 
                1. MPESA OUTLINE
                2. STK PUSH
                3. CARD
            */}
            
            <div className="payment_options">



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
