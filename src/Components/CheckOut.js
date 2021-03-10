import React, { useState } from 'react'
import './Checkout.css'
import CartProduct from './CartProduct';
import Process from './Process';
import { getSubTotal } from './reducer';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

import { CardTravelRounded, CommuteRounded, LocalShippingRounded } from '@material-ui/icons';
import axios from "../Components/axios"


// ASK USER 1. ARE YOU A MEMBER - LOGIN 2. IF NOT Sign UP or proceed without signing up
// EACH PRODUCT WITH ITS TOTAL + PRODUCT TOTAL THEN RENDER SUBTOTAL AFTER DELIVERY FEE
// GET SUBTOTAL + DELIVERY FEE OR PAYMENT FEE

// PLACE ORDER BUTTON SHOULD BE
// 1. SEND STK MPESA PUSH IF MPESA
// 2. SEND STRIPE IF CARD 
// 3. ALL THIS PLUS SEND AN ORDER NOTIFICATION MESSAGE WITH FORM INFO TO BUSINESS
export default function Checkout({stripePromise}) {
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

    // PAYMENT PART
    const [useMpesa, setUseMpesa] = useState(false);
    const [useMpesaExpress, setUseMpesaExpress] = useState(false);
    const [useCard, setUseCard] = useState(false);
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const [paySuccess, setPaySuccess] = useState(false);

    const handleMpesaOrCard = (e) =>{
        try{
            if(e.target.classList.contains("mpesa_regular")){
                useMpesa ? setUseMpesa(false) : setUseMpesa(true);
                useMpesaExpress && setUseMpesaExpress(false);
                useCard && setUseCard(false)
            }else if(e.target.classList.contains("mpesa_express")){
                useMpesa && setUseMpesa(false);
                useMpesaExpress ? setUseMpesaExpress(false) : setUseMpesaExpress(true);
                useCard && setUseCard(false);
            }else if(e.target.classList.contains("card_pay")){
                useMpesa && setUseMpesa(false);
                useMpesaExpress && setUseMpesaExpress(false);
                useCard ? setUseCard(false) : setUseCard(true);
            }
        }catch(error){
            console.log("ERROR ", error)
        }
    }
    // COMPLETE PAYMENT
    const postFormCart = async () => {
        const inputFields = document.querySelectorAll(".card_payment_form .input_fields");
        let myformData = [];
        inputFields.forEach( paydata => myformData.push({ [paydata.name]: paydata.value}))
        let cartDetails = cart.map( ({name, quantity}) => ({name, quantity}))
        let allInfo = [...myformData, ...cartDetails]; // send this as email or message to shades of ruth after order has been confirmed
        // console.log("Processing payment...", allInfo); // send message with cart as products and formdata as user info

        // POST
        const response = await fetch('/checkout',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept' : 'application/json'
            },
            body: JSON.stringify(allInfo),
            cache: 'no-cache', 

        } );
        return response;
    }
    const handleCardPayment = (e) => {
        e.preventDefault();
        postFormCart()
            .then( response => response.json())
            .then(data => {
            // console.log('Success:', data);
            return data;
        })
            .catch( error => console.log("POST FORM CART ERROR: ", error))
    }
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
                            </div>
                        }
                        <div className="checkout_product_subtotal">
                            <h5><strong>Order Total:</strong></h5>
                                <CurrencyFormat
                                    renderText={ (value) => (
                                        <p><strong>{`${value}`}</strong></p>
                                    )}        
                                    decimalScale={2}
                                    value={parseInt(getSubTotal(cart)) + parseInt(fee)}
                                    thousandSeparator={true}
                                    prefix={"Ksh. "}
                                />
                        </div> 
                    </div>           
                </div>

            <div className="payment_options">
            <h3>Payment Options</h3>
            <p>Please Select your preferred Payment Method</p>

            <div className="select_payment_option">
                <div className="payment_choice" onClick={handleMpesaOrCard}>
                    <img className="mpesa_regular" src="images/mpesa.png" alt="Lipa na Mpesa"/>
                </div>
                <div className="payment_choice" onClick={handleMpesaOrCard}>
                    <img className="mpesa_express" src="images/mpesa_express.png" alt="Mpesa Express"/>
                </div>                
                <div className="payment_choice" onClick={handleMpesaOrCard}>
                    <img className="card_pay" src="images/card.png" alt="Card Payments"/>
                </div>                                      
            </div>
            {
                useMpesa ?                   
                    <div className="mpesa_process_div">
                        <div className="actual_process">
                        <h3>Lipa na M-pesa</h3>
                        <p>1. Open your M-pesa</p>
                        <p>2. Select Buy Goods and Services</p>
                        <p>3. Enter Till No. <strong>567890</strong></p>
                        <p>4. Enter the Amount: <strong>{getSubTotal(cart)+ parseInt(fee)}</strong></p>
                        <p>5. Enter Your Pin</p>
                        <p>6. Confirm the name <strong>"Business Name"</strong></p>
                        </div>
                        <form className="mpesa_process_form" action="POST">
                        <p>Please provide the following information to confirm payment</p>
                        <div className="checkout_row_form">
                            <h5 className="login_labels">Enter Phone Number:</h5>
                            <input className="input_fields" type="text" required></input>
                        </div>
                        <div className="checkout_row_form">
                            <h5 className="login_labels">M-PESA Confirmation Code:</h5>
                            <input className="input_fields" type="text" required></input>
                        </div>                                            
                        </form>
                        {/* BACKEND CHECK WHETHER PAYMENT HAD BEEN MADE ON SOR SIDE */}
                    </div>
                
                : useMpesaExpress ?

                    <div className="mpesa_stk_div">
                        {/* SEND POST REQUEST AND GET SUCCESS/ FAILURE */}
                        <p>Receive M-pesa Payment Prompt</p>
                        <form className="send_mpesa_stk" action="POST">
                            <div className="checkout_row_form">
                                <h5 className="login_labels">Enter Phone Number:</h5>
                                <input className="input_fields" type="text" required></input>
                            </div>                                
                        </form>
                    </div>
                
                : useCard &&

                    <div className="stripe_card_div">
                        <h3>Online Secure Card Payment</h3>
                        <p>Please provide your card information below</p>
                            <form className="card_payment_form" action="/card_payment" method="POST" onSubmit={handleCardPayment}>
                            <div className="checkout_row_form">
                                <h5 className="login_labels">Email Address:</h5>
                                <input name="email" className="input_fields" type="text" required></input>
                            </div>                                
                            <div className="checkout_row_form">
                                <h5 className="login_labels">Name on Card:</h5>
                                <input name="card_name" className="input_fields" type="text" required></input>
                            </div>   
                            <div className="checkout_row_form">
                                <h5 className="login_labels">Card Information:</h5>
                                <input name="card_number" className="input_fields" type="text" size="20" data-stripe="number" required></input>
                            </div>   
                            <div className="checkout_row_form">
                                <h5 className="login_labels">Expiration (MM/YY)</h5>
                                <input name="exp_month" className="input_fields smaller" type="text" size="2" data-stripe="exp_month" required></input>
                                {/* <h5 className="login_labels">/</h5> */}
                                <span>/</span>
                                <input name="exp_year" className="input_fields smaller" type="text" size="2" data-stripe="exp_year" required></input>
                            </div>   
                            <div className="checkout_row_form">
                                <h5 className="login_labels">CVC: </h5>
                                <input name="cvc" className="input_fields" type="text" size="4" data-stripe="cvc" required></input>
                            </div>  
                            <button 
                                type="submit"
                                className="card_submit checkout_product_subtotal btns" 
                                >
                                {isPaymentLoading ? "Payment Loading..." : "Complete Payment"}
                            </button> 
                        </form>  
                    </div>
            } 
            </div>



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
