import React, { useState } from 'react'
import { useHistory } from 'react-router';
import './Checkout.css'
import CartProduct from './CartProduct';
import Process from './Process';
import Footer from './Footer';

import { getSubTotal } from './reducer';
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';

import { CardTravelRounded, CommuteRounded } from '@material-ui/icons';

// ASK USER 1. ARE YOU A MEMBER - LOGIN 2. IF NOT Sign UP or proceed without signing up
// EACH PRODUCT WITH ITS TOTAL + PRODUCT TOTAL THEN RENDER SUBTOTAL AFTER DELIVERY FEE
// GET SUBTOTAL + DELIVERY FEE OR PAYMENT FEE

// PLACE ORDER BUTTON SHOULD BE
// 1. SEND STK MPESA PUSH IF MPESA
// 2. SEND STRIPE IF CARD 
// 3. ALL THIS PLUS SEND AN ORDER NOTIFICATION MESSAGE WITH FORM INFO TO BUSINESS
export default function Checkout() {
    const [ {cart}, dispatch ] = useStateValue();
    const history = useHistory();

    // P/DELIVERY
    const [pickup, setPickup] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [fee, setFee] = useState(0);
    const [address, setAddress] = useState("");
    const [pdOption, setPDOption] = useState("");
    const [ sendOrderDetails, setSendOrderDetails] = useState({
        client_name: '', 
        client_contact_number: '', 
        client_email: '', 
        client_requests: '', 
        client_order: "",
        cart_total: '',
        client_address: '',
        client_pd_option: '',
        client_mpesa_number: '', 
        client_mpesa_code: ''
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

    const getFeeAndAddress = (e) => {
        const values = JSON.parse((e.target.value))
        pickup ? setPDOption("Pickup") : delivery && setPDOption("Delivery")
        setFee(values.fee)
        setAddress(values.place)
    }

    const amount = parseInt(getSubTotal(cart)) + parseInt(fee)

    // LIPA NA MPESA SECTION
    const [ lnmFormFilled, setLnmFormFilled] = useState(false);
    const [ warning, setWarning ] = useState("")

    const orderDetails = [], cartInfo = []; 
    let mpesa_num, mpesa_code ;

    const handleOrderDetails = () => {

    mpesa_num = document.querySelector(".lnm_number").value;
    mpesa_code = document.querySelector(".lnm_mpesa_code").value;

    if(mpesa_num.length !== 0 && mpesa_code.length !== 0) {
        setLnmFormFilled(true);
        setWarning("")
    }else {
        setLnmFormFilled(false);
        setWarning(" ⓘ Please Fill In The Above Details")
    }

    const orderInputs = document.querySelectorAll(".checkout_client_details .input_fields");
    orderInputs.forEach( orders => orderDetails.push({ [orders.name]: orders.value}))

    cart.forEach( item => cartInfo.push({ "Name: ":item.name, "Quantity: ":item.quantity}))

     setSendOrderDetails({          
        client_name: orderDetails[0].client_name, 
        client_contact_number: orderDetails[1].client_contact_number, 
        client_email: orderDetails[2].client_email, 
        client_requests: orderDetails[3].client_requests, 
        client_order: JSON.stringify(cartInfo),
        cart_total: amount,
        client_address: address,
        client_pd_option: pdOption,
        client_mpesa_number: mpesa_num, 
        client_mpesa_code: mpesa_code             
    })
    console.log("Final Order" , sendOrderDetails); 
    }

    const sendEmail = () => {
        try{
            window.emailjs.send("service_4g858vb", "template_44ffscs", sendOrderDetails, "user_BEqm6BdomIvJ0Y0hRhujd")
            .then( (response) => {
               console.log('SUCCESS!', response.status, response.text);
               history.push("/order_success");
            // localStorage.clear();
            // Clear Cart
            })
            .catch((error) =>{
            console.log('FAILED...', error);
               history.push("/order_failure");
            }); 
            
        }catch(error)   {
            console.log("ERROR: ", error)
        }
    }

    const handlePlaceOrder = async () => {

        try {
            handleOrderDetails();
            console.log("Email Sent!")            
            // sendEmail();
        }catch(error) {
            console.log(error);
        }
    }


    return (
        <div className="checkout_page">
            {
                cart.length > 0 ? 
            <>
            <Process/>

            <div className="client_and_checkout"> 

                <div className="checkout_details_right">
                    <h3>Product Preview</h3> 
                    
                    <div className="product_preview"> 
                        {cart && cart.map( item => (
                            <CartProduct 
                            key={item.id}
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
                        
                    {/*  DELIVERY / PICKUP */}
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
                                <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFeeAndAddress}>
                                    <option value='{ "fee": 0, "place": "Location" }' defaultValue>Location</option>
                                    <option value='{ "fee": 300, "place": "Westlands" }'>Westlands</option>
                                    <option value='{ "fee": 450, "place": "Kitengela" }'>Kitengela</option>
                                    <option value='{ "fee": 650, "place": "Runda" }'>Runda</option>
                                    <option value='{ "fee": 932, "place": "Kiambu" }'>Kiambu</option>
                                </select>                    
                            </div>
                            : delivery &&
                            <div className="delivery_pickup_options checkout_row_form">
                                <label className="login_labels">Select Delivery Location:</label>
                                <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFeeAndAddress}>
                                    <option value='{ "fee": 0, "place": "Location" }' defaultValue>Location</option>
                                    <option value='{ "fee": 555, "place": "Mombasa Road" }'>Mombasa Road</option>
                                    <option value='{ "fee": 467, "place": "Rosslyn  Riviera" }'>Rosslyn  Riviera</option>
                                    <option value='{ "fee": 212, "place": "Village Market" }'>Village Market</option>
                                    <option value='{ "fee": 765, "place": "Ngong Road" }'>Ngong Road</option>
                                </select>
                            </div>
                        }
                    </div> 

                    {/* ORDER SUBTOTAL */}
                    <div className="checkout_product_subtotal">
                        <div className="subtotal_row">
                        <h5><strong>Item Total:</strong></h5>
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

                        <div className="subtotal_row">
                        <h5><strong>Delivery Fee:</strong></h5>
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

                        <div className="subtotal_row">
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

                {/* DETAILS AND LNM */}
                <div className="client_details">
                
                    {/* DETAILS */}
                    <form className="checkout_client_details">
                        <h3>Checkout Details</h3>
                        <p>Please provide the following information to facilitate delivery: </p>
                        <div className="checkout_row_form">
                            <h5 className="login_labels">Full Name:</h5>
                            <input className="input_fields" type="text" name="client_name" required></input>
                        </div>
                        <div className="checkout_row_form">
                            <h5 className="login_labels">Phone Number:</h5>
                            <input className="input_fields" type="text" name="client_contact_number" required></input>
                        </div>
                        <div className="checkout_row_form">
                            <h5 className="login_labels" >Email:</h5>
                            <input className="input_fields" type="text" id="email" name="client_email" required></input>
                        </div>
                        <div className="checkout_row_form">
                            <h5 className="login_labels" >Special Requests: </h5>
                            <textarea className="input_fields" name="client_requests" type="text" id="requests" rows="4" cols="60" required></textarea>
                        </div>                
                        <input type="checkbox" id="isNewMember"  name="isNewMember" value="Member"></input>
                        <label for="isNewMember" className="login_labels">Would you like to sign up?</label>
                    </form>
                    
                    {/* LIPA NA MPESA */}
                    <section className="temp_lipa_na_mpesa">
                        <div className="mpesa_process_div">
                            <div className="actual_process">
                            <h3>Lipa na M-pesa</h3>
                            <p>1. Open your M-pesa</p>
                            <p>2. Select Buy Goods and Services</p>
                            <p>3. Enter Till No. <strong>5830891</strong></p>
                            <p>4. Enter the Amount: <strong>{amount}</strong></p>
                            <p>5. Enter Your Pin</p>
                            <p>6. Confirm the name <strong>"SHARU COSMETICS"</strong></p>
                            </div>  
                            <form className="mpesa_process_form">
                            <p>Please provide the following information to confirm payment</p>
                            <div className="checkout_row_form">
                                <h5 className="login_labels">Enter Phone Number:</h5>
                                <input className="input_fields lnm_number" name="client_mpesa_number" type="text" required></input>
                            </div>
                            <div className="checkout_row_form">
                                <h5 className="login_labels">M-PESA Confirmation Code:</h5>
                                <input className="input_fields lnm_mpesa_code" name="client_mpesa_code" type="text" required></input>
                            </div>
 
                            </form> 
                            {
                                !lnmFormFilled &&
                                <p className="warning">{warning}</p>
                            }                                                         
                            <button className="btns complete_order_btn" onClick={handlePlaceOrder}> 
                                Place Order
                            </button>
                        </div>            
                    </section>

                </div>                
            
            </div>
            </>
            :
            <div className="nothing_in_checkout">
                <p>Sorry you have no items in your cart :</p>
            </div>

            }
            <Footer />
        </div>
    )
}
