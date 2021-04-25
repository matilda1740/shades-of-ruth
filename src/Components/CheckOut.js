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
    const [ {cart}] = useStateValue();
    const history = useHistory();

    // P/DELIVERY
    const [pickup, setPickup] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [fee, setFee] = useState(0);
    const [address, setAddress] = useState("");
    const [pdOption, setPDOption] = useState("");

    const [clientName, setClientName] = useState("");
    const [clientNumber, setClientNumber] = useState(0);
    const [clientEmail, setClientEmail] = useState("");
    const [clientRequests, setClientRequests] = useState("");
    const [mpesaNumber, setMpesaNumber] = useState(0);
    const [mpesaCode, setMpesaCode] = useState("");
    const [sendOrderDetails, setSendOrderDetails] = useState();

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
    const [ detailsWarning, setDetailsWarning ] = useState("")
    const [ phoneWarning, setPhoneWarning ] = useState("")
    const [ mailWarning, setMailWarning ] = useState("")
    const [ warning, setWarning ] = useState("")

    const cartInfo = []; 
    cart.forEach( item => cartInfo.push({ "Name: ":item.name, "Quantity: ":item.quantity}))

    const formValidation = (e) => {

        if(e.target.value.length === 0 || e.target.value === ""){
            setLnmFormFilled(false);
            setWarning(" ⓘ Please Fill All the Above Fields") 
        }else {
            let value = e.target.value.trim()
            if (e.target.name === "client_name" ){
                setClientName(value);
            }
            else if(e.target.name === "client_contact_number" || e.target.name === "client_mpesa_number"){
                let phone = value.replace(/\s+/g, '');
                let phoneRegex = /^\+?\s?[0-9]{3}\d{9,10}$/;
                let phoneRegNoCode = /^\d{10}$/;

                if(phone.match(phoneRegex) || phone.match(phoneRegNoCode)) {
                    setPhoneWarning("");
                    e.target.name === "client_contact_number" ? setClientNumber(phone) : e.target.name === "client_mpesa_number" && setMpesaNumber(phone);
                }else {
                    setPhoneWarning("ⓘ Please Enter A Valid Phone Number(+254 712345678 or 0712345678)") 
                }
            }
            else if(e.target.name === "client_email"){
                let mail = value.toLowerCase();
                let mailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
                if(mail.match(mailRegex)){
                setMailWarning("")
                setClientEmail(mail)
                } else{
                setMailWarning("ⓘ Enter Valid Email Address")
                }
            }
            else if(e.target.name === "client_requests"){
                setClientRequests(value);
            }else if(e.target.name === "client_mpesa_code"){
                setMpesaCode(value);
            }
            setSendOrderDetails({          
            client_name: clientName, 
            client_contact_number: clientNumber, 
            client_email: clientEmail, 
            client_requests: clientRequests, 
            client_order: JSON.stringify(cartInfo),
            cart_total: amount,
            client_address: address,
            client_pd_option: pdOption,
            client_mpesa_number: mpesaNumber, 
            client_mpesa_code: mpesaCode,             
            })
        }
    }

  
    const handleOrderDetails = (e) => {

        e.preventDefault()
        setSendOrderDetails({          
        client_name: clientName, 
        client_contact_number: clientNumber, 
        client_email: clientEmail, 
        client_requests: clientRequests, 
        client_order: JSON.stringify(cartInfo),
        cart_total: amount,
        client_address: address,
        client_pd_option: pdOption,
        client_mpesa_number: mpesaNumber, 
        client_mpesa_code: mpesaCode,             
        })

         
        if(clientName !== "" && clientNumber !== 0 && clientEmail !== "" && clientRequests !== "" && mpesaNumber !== 0 && mpesaCode !== ""){
            setDetailsWarning("") 
            setWarning("")
            setLnmFormFilled(true);
            sendEmail()
            // sendOrderDetails && sendEmail()
        }
        else {
            setLnmFormFilled(false);
            setDetailsWarning(" ⓘ Please Fill in All the Above Fields") 
            setWarning(" ⓘ Please Fill in All the Above Fields")
        }    

    }


    const sendEmail = () => {

        console.log("Email Sent");
        console.log("Order: " , sendOrderDetails);
        try{
            window.emailjs.send("service_4g858vb", "template_44ffscs", sendOrderDetails, "user_BEqm6BdomIvJ0Y0hRhujd")
            .then( (response) => {
            //    console.log('SUCCESS!', response.status, response.text);
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

                            <section className="delivery_pickup_options checkout_row_form">
                            
                            <label className="login_labels">Select Pickup Station:</label>
                            <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFeeAndAddress}>
                                    <option value='{ "fee": 0, "place": "Location" }' defaultValue>Location</option>
                                    <option value='{ "fee": 100, "place": "Nairobi County - Within CBD" }'>Nairobi County, Within CBD - 100</option>
                                    <option value='{ "fee": 180, "place": "Within Nairobi County - Outside CBD" }'>Within Nairobi County, Outside CBD - 180</option>
                                    <option value='{ "fee": 300, "place": "Outside Nairobi County - Within Kenya" }'>Outside Nairobi County, Within Kenya - 300</option>
                                </select>                    
                            </section>

                            : delivery &&
                            <div className="delivery_pickup_options checkout_row_form">
                                <label className="login_labels">Select Delivery Location:</label>
                                <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFeeAndAddress}>
                                    <option value='{ "fee": 0, "place": "Location" }' defaultValue>Location</option>
                                    <option value='{ "fee": 400, "place": "Within Nairobi County" }'>Within Nairobi County - 400</option>
                                    <option value='{ "fee": 500, "place": "Outskirts of Nairobi County" }'>Outskirts of Nairobi County - 500</option>
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
                        <h5><strong>Shipping Fee:</strong></h5>
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
                            <input onChange={formValidation} className="input_fields" type="text" id="client_name" name="client_name" required></input>
                        </div>
                        <div className="checkout_row_form">
                            <h5 className="login_labels">Phone Number:</h5>
                            <input onChange={formValidation} className="input_fields" type="text" id="client_contact_number" name="client_contact_number" required></input>
                        </div>
                        {
                            !lnmFormFilled &&
                            <p className="warning">{phoneWarning}</p>
                        }
                        <div className="checkout_row_form">
                            <h5 className="login_labels" >Email:</h5>
                            <input onChange={formValidation}  className="input_fields" type="text" id="client_email" name="client_email" required></input>
                        </div>
                        {
                            !lnmFormFilled &&
                            <p className="warning">{mailWarning}</p>
                        }
                        <div className="checkout_row_form">
                            <h5 className="login_labels" >Special Requests: </h5>
                            <textarea onChange={formValidation} className="input_fields" name="client_requests" type="text" id="requests" rows="4" cols="60" required></textarea>
                        </div> 
                        {
                            detailsWarning !== "" &&
                            <p className="warning final">{detailsWarning}</p>
                        }

                        <p className="warning">Please include information about specific pickup or delivery location in your special requests</p>

                        {/* <input type="checkbox" id="isNewMember"  name="isNewMember" value="Member"></input>
                        <label for="isNewMember" className="login_labels">Would you like to sign up?</label> */}
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
                            <form className="mpesa_process_form" onSubmit={handleOrderDetails}>
                            <p>Please provide the following information to confirm payment</p>
                            <div className="checkout_row_form">
                                <h5 className="login_labels">Enter Phone Number:</h5>
                                <input onChange={formValidation} className="input_fields lnm_number" name="client_mpesa_number" type="text" required></input>
                            </div>
                            {
                            !lnmFormFilled &&
                            <p className="warning">{phoneWarning}</p>
                            }
                            <div className="checkout_row_form">
                                <h5 className="login_labels">M-PESA Confirmation Code:</h5>
                                <input onChange={formValidation} className="input_fields lnm_mpesa_code" name="client_mpesa_code" type="text" required></input>
                            </div>
                             {
                                !lnmFormFilled &&
                                <p className="warning final">{warning}</p>
                            }                                                         
                            <button type="submit" className="btns complete_order_btn" > 
                                Place Order
                            </button>
                            </form> 

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
