import React, { useState } from 'react'
import './Checkout.css'
import CartProduct from './CartProduct';
import Process from './Process';
import { getSubTotal } from './reducer';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

import { CardTravelRounded, CommuteRounded } from '@material-ui/icons';
import axios from "../Components/axios"
import Payment from './Payment';


// ASK USER 1. ARE YOU A MEMBER - LOGIN 2. IF NOT Sign UP or proceed without signing up
// EACH PRODUCT WITH ITS TOTAL + PRODUCT TOTAL THEN RENDER SUBTOTAL AFTER DELIVERY FEE
// GET SUBTOTAL + DELIVERY FEE OR PAYMENT FEE

// PLACE ORDER BUTTON SHOULD BE
// 1. SEND STK MPESA PUSH IF MPESA
// 2. SEND STRIPE IF CARD 
// 3. ALL THIS PLUS SEND AN ORDER NOTIFICATION MESSAGE WITH FORM INFO TO BUSINESS
export default function Checkout({stripePk}) {
    const [ {cart}, dispatch ] = useStateValue();
    // P/DELIVERY

    const [pickup, setPickup] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [fee, setFee] = useState(0);

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

    const amount = parseInt(getSubTotal(cart)) + parseInt(fee)

    return (
        <div className="checkout_page">
            {
                cart.length > 0 ? 
            <>
            <Process/>

            <div className="client_and_checkout"> 
                <div className="client_details">
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
                        <textarea className="input_fields" type="text" id="requests" rows="4" cols="60" required></textarea>
                    </div>                
                    <input type="checkbox" id="isNewMember"  name="isNewMember" value="Member"></input>
                    <label for="isNewMember" className="login_labels">Would you like to sign up?</label>
                    <button></button>
                </form>
                </div>

                <div className="checkout_details_right">
                    <div className="checkout_details">
                        <div className="product_preview"> 
                            <h3>Product Preview</h3> 
                                {cart && cart.map( item => (
                                    <CartProduct 
                                    className="checkout_products"
                                    id={item.id}
                                    type={item.type}
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                    quantity={item.quantity}
                                    />
                                ))}
                        </div>
                        
                        <div className="checkout_product_subtotal">
                            <h5><strong>Products Total:</strong></h5>
                            <CurrencyFormat
                                renderText={ (value) => (
                                    <p><strong>{`${value}`}</strong></p>
                                )}        
                                decimalScale={2}
                                value={getSubTotal(cart)}
                                thousandSeparator={true}
                                prefix={"Ksh. "}
                            />
                        </div>
                    </div>

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
                        {pickup ? 
                            <div className="delivery_pickup_options checkout_row_form">
                            <label className="login_labels">Select Pickup Station:</label>
                                <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFee}>
                                    <option value="0" defaultValue>Location</option>
                                    <option value="300">Westlands</option>
                                    <option value="450">Kitengela</option>
                                    <option value="650">Runda</option>
                                    <option value="432">Kiambu</option>
                                </select>                    
                            </div>
                            : delivery &&
                            <div className="delivery_pickup_options checkout_row_form">
                                <label className="login_labels">Select Delivery Location:</label>
                                <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFee}>
                                    <option value="0" defaultValue>Location</option>
                                    <option value="300">Mombasa Road</option>
                                    <option value="450">Rosslyn  Riviera</option>
                                    <option value="650">Village Market</option>
                                    <option value="432">Ngong Road</option>
                                </select>
                            </div>
                        }
                        <div className="checkout_product_subtotal">
                            <h5><strong>Order Total:</strong></h5>
                                <CurrencyFormat
                                    renderText={ (value) => (
                                        <p><strong>{`${value}`}</strong></p>
                                    )}        
                                    decimalScale={2}
                                    value={amount}
                                    thousandSeparator={true}
                                    prefix={"Ksh. "}
                                />
                        </div> 
                    </div>           
                </div>
                
                <Payment amount={amount} stripePk={stripePk}/>
                {/* BOTTOM DIV */}

                {/* <div className="shopping_or_checkout">
                        <Link to="/products">
                            <button className="btns">Continue Shopping</button>
                        </Link>
                        <Link to="/cart">
                            <button className="btns">Back to Cart</button>
                        </Link>
                        </div>  
                */}
            </div>
            </>
            :
            <div className="nothing_in_checkout">
                <p>Sorry you have no items in your cart :</p>
            </div>
            }
        </div>
    )
}
