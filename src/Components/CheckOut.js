import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './Checkout.css'
import axios from './axios';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { CardTravelRounded, CommuteRounded } from '@mui/icons-material';
import { NavigateBeforeRounded } from '@mui/icons-material';
import Coupon from './Coupon';
import CartProduct from './CartProduct';
import Process from './Process';

import { useStateValue } from '../redux/StateProvider';
import { getSubTotal } from '../redux/reducers/cartListReducer';


export default function Checkout() {
    const {cartListState, cartListDispatch}  = useStateValue(); 
    const {cart} = cartListState;

    const navigate = useNavigate();

    // P/DELIVERY
    const [pickup, setPickup] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [fee, setFee] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [discounted, setDiscounted] = useState(0);

    let amount = parseInt(getSubTotal(cart)) + parseInt(fee);

    
    const [address, setAddress] = useState("");
    const [pdOption, setPDOption] = useState("");


    // FORM VALIDATION WARNINGS
    const [lnmFormFilled, setLnmFormFilled] = useState(false);
    const [detailsWarning, setDetailsWarning] = useState("")
    const [phoneWarning, setPhoneWarning] = useState("")
    const [mailWarning, setMailWarning] = useState("")
    const [warning, setWarning] = useState("")

    // CLIENT DETAILS
    const [clientName, setClientName] = useState("");
    const [clientNumber, setClientNumber] = useState(0);
    const [clientEmail, setClientEmail] = useState("");
    const [clientRequests, setClientRequests] = useState("");
    const [mpesaNumber, setMpesaNumber] = useState(0);
    const [mpesaCode, setMpesaCode] = useState("");
    const [sendOrderDetails, setSendOrderDetails] = useState();

    const cartInfo = [];
    cart.forEach(item => cartInfo.push({ "Name: ": item.name, "Quantity: ": item.quantity }))


    const handleSetDetails = () => {
        // if(isCoupon === true){
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
        // client_valid_coupon: isCoupon,
        coupon_discount: amount * 0.1 ,
        final_order_amount: amount * 0.9,               
        // }) 
        // }else if(isCoupon === false){
        // setSendOrderDetails({
        // client_name: clientName,
        // client_contact_number: clientNumber,
        // client_email: clientEmail,
        // client_requests: clientRequests,
        // client_order: JSON.stringify(cartInfo),
        // cart_total: amount,
        // client_address: address,
        // client_pd_option: pdOption,
        // client_mpesa_number: mpesaNumber,
        // client_mpesa_code: mpesaCode,
        // client_valid_coupon: isCoupon,            
        })                
        // }
    }

    const handleCartReset = () => {
        cartListDispatch({
            type: "reset_cart"
        })
    }

    const handlePickupOrDelivery = (e) => {
        try {
            if (e.target.classList.contains("pickup") || e.target.parentNode.classList.contains("pickup")) {
                delivery && setDelivery(false)
                pickup ? setPickup(false) : setPickup(true)
            }
            else if (e.target.classList.contains("delivery") || e.target.parentNode.classList.contains("delivery")) {
                pickup && setPickup(false)
                delivery ? setDelivery(false) : setDelivery(true)
            }
        } catch (error) {
            console.log("ERROR", error)
        }
        
    }

    const getFeeAndAddress = (e) => {
        const values = JSON.parse((e.target.value))
        pickup ? setPDOption("Pickup") : delivery && setPDOption("Delivery")
        setFee(values.fee)
        setAddress(values.place)

        // if(isCoupon){
        //     dispatch({
        //     type: "coupon_code",
        //     boolean: true,
        //     total: amount
        // }) 
        // }
    }

    const formValidation = (e) => {

        if (e.target.value.length === 0 || e.target.value === "") {
            setLnmFormFilled(false);
            setWarning(" ⓘ Please Fill All the Above Fields")
        } else {
            let value = e.target.value.trim()
            if (e.target.name === "client_name") {
                setClientName(value);
            }
            else if (e.target.name === "client_contact_number" || e.target.name === "client_mpesa_number") {
                let phone = value.replace(/\s+/g, '');
                let phoneRegex = /^\+?\s?[0-9]{3}\d{9,10}$/;
                let phoneRegNoCode = /^\d{10}$/;

                if (phone.match(phoneRegex) || phone.match(phoneRegNoCode)) {
                    setPhoneWarning("");
                    e.target.name === "client_contact_number" ? setClientNumber(phone) : e.target.name === "client_mpesa_number" && setMpesaNumber(phone);
                } else {
                    setPhoneWarning("ⓘ Please Enter A Valid Phone Number(+254 712345678 or 0712345678)")
                }
            }
            else if (e.target.name === "client_email") {
                let mail = value.toLowerCase();
                let mailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
                if (mail.match(mailRegex)) {
                    setMailWarning("")
                    setClientEmail(mail)
                } else {
                    setMailWarning("ⓘ Enter Valid Email Address")
                }
            }
            else if (e.target.name === "client_requests") {
                setClientRequests(value);
            } else if (e.target.name === "client_mpesa_code") {
                setMpesaCode(value);
            }
        }

        handleSetDetails()
    }

    // COUPON SECTION 
    const [validCoupon, setValidCoupon] = useState(false);
    const [couponError, setCouponError] = useState("")
    
    const couponInput = document.getElementById("coupon_form")

    const handleInvalidCode = () => {
        setValidCoupon(false);

        if(typeof(couponInput) !== "undefined" && couponInput!==null){
        couponInput.style.border = `2px solid #f70000`;
        }

        // dispatch({
        // type: "coupon_code",
        // boolean: false,
        // total: amount
        // }) 
        
    }

    const handleCodeEntry = e => {
        let value = e.target.value.trim().toUpperCase();

        if(value.length !== 0){     
            if(value === "THANKYOU10"){
                setValidCoupon(true);
                setCouponError("");

                if(typeof(couponInput) !== "undefined" && couponInput!==null){
                couponInput.style.border = `transparent` ;                
                }
            } else { 
                handleInvalidCode(); 
                setCouponError("ⓘ Please Enter Valid Coupon Code") 
            }
        }
        else {
            handleInvalidCode()
        }         

 }

    const handleCouponSubmit = (e) => {
        e.preventDefault();
        if(validCoupon){
        // dispatch({
        //     type: "coupon_code",
        //     boolean: true,
        //     total: amount
        // }) 
        setCouponError("");
        }else{
            setCouponError("ⓘ Please Enter Valid Coupon Code")
        }
    }

    const handleOrderDetails = (e) => {

        e.preventDefault();

        handleSetDetails();
                    

        if (clientName !== "" && clientNumber !== 0 && clientEmail !== "" && clientRequests !== "" && mpesaNumber !== 0 && mpesaCode !== "") {
            setDetailsWarning("")
            setWarning("")
            setLnmFormFilled(true);
            sendEmail()
        }
        else {
            setLnmFormFilled(false);
            setDetailsWarning(" ⓘ Please Fill in All the Above Fields")
            setWarning(" ⓘ Please Fill in All the Above Fields")
        }

    }

    const sendEmail = () => {

        // console.log("Email Sent");
        // console.log("Order: " , sendOrderDetails);
        try {
            console.log("Order: " , sendOrderDetails);  
            axios({
                method: 'post',
                url: '/',
                data: sendOrderDetails
            })
                .then( response => response.json())
                .catch( (error) => console.log(error))
            window.emailjs.send("service_4g858vb", "template_44ffscs", sendOrderDetails, "user_BEqm6BdomIvJ0Y0hRhujd")
            .then( (response) => {
            navigate("/order_success");
            try {
                handleCartReset();
            }catch(error){
                console.log("Cart Clearance Error:", error)
            }
            })
            .catch((error) =>{
            console.log('FAILED...', error);
               navigate("/order_failure");
            }); 
        } catch (error) {
            console.log("ERROR: ", error)
        }
    }

    return (
        <div className="checkout_page">
            {
                cart.length > 0 ?
                    <>
                        <Process />

                        <div className="client_and_checkout">

                            <div className="checkout_details_right">

                                <h3>Product Preview</h3>

                                <div className="product_preview">
                                    {cart && cart.map(item => (
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
                                        <div className="delivery_pickup_cont pickup" onClick={handlePickupOrDelivery}>
                                            <h3 className="pickup">Pick Up</h3>
                                            <CardTravelRounded className="delivery_icon pickup" />
                                        </div>
                                        <div className="delivery_pickup_cont delivery" onClick={handlePickupOrDelivery}>
                                            <h3 className="delivery">Delivery</h3>
                                            <CommuteRounded className="delivery_icon delivery" />
                                        </div>
                                    </div>
                                    {pickup ?

                                        <section className="delivery_pickup_options checkout_row_form">

                                            <label className="login_labels">Select Pickup Station:</label>
                                            <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFeeAndAddress}>
                                                <option value='{ "fee": 0, "place": "Location" }' defaultValue>Location</option>
                                                <option value='{ "fee": 100, "place": "Nairobi County - Within CBD" }'>Nairobi County, Within CBD - 100</option>
                                                <option value='{ "fee": 180, "place": "Within Nairobi County - Outside CBD" }'>Within Nairobi County, Outside CBD - 180</option>
                                                <option value='{ "fee": 200, "place": "Outside Nairobi County - Within Kenya" }'>Outside Nairobi County, Within Kenya - 200</option>
                                            </select>
                                        </section>

                                        : delivery &&
                                        <>
                                            <div className="delivery_pickup_options checkout_row_form">
                                                <label className="login_labels">Select Delivery Location:</label>
                                                <select name="delivery_locations" id="delivery_locations" data-selected="" onChange={getFeeAndAddress}>
                                                    <option value='{ "fee": 0, "place": "Location" }' defaultValue>Location</option>
                                                    <option value='{ "fee": 230, "place": "Within Nairobi County" }'>Nairobi County (Westlands, Lavington, Langata, South B, South C, Imara Daima, Donholm, Umoja, Garden Estate, Zimmerman, Kasarani, Riara Road) - 230</option>

                                                    <option value='{ "fee": 330, "place": "Within Nairobi County" }'>Nairobi County (Kahawa Sukari, Loresho, Karen, Uthiru, Rongai, Ruiru, Syokimau, Utawala) - 330</option>
                                                    <option value='{ "fee": 400, "place": "Outskirts of Nairobi County" }'>Outskirts of Nairobi County (Juja, Kitengela, Kinoo, Ngong) - 400</option>
                                                </select>
                                            </div>
                                            <label className="login_labels warning">N.B. All deliveries will be made the following day</label>
                                        </>
                                    }
                                </div>

                                {/* ORDER SUBTOTAL */}
                                <div className="checkout_product_subtotal">
                                    <div className="subtotal_row">
                                        <h5><strong>Item Total:</strong></h5>
                                        <CurrencyFormat
                                            renderText={(value) => (
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
                                            renderText={(value) => (
                                                <p><strong>{`${value}`}</strong></p>
                                            )}
                                            decimalScale={2}
                                            value={fee}
                                            thousandSeparator={true}
                                            prefix={"Ksh. "}
                                        />
                                    </div>

                                    {/* {
                                        isCoupon ? 
                                    <>
                                    <div className="subtotal_row">
                                        <h5><strong>Order Total:</strong></h5>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <p><strong>{`${value}`}</strong></p>
                                            )}
                                            decimalScale={2}
                                            value={amount}
                                            thousandSeparator={true}
                                            prefix={"Ksh. "}
                                        />
                                    </div>                                       
                                    
                                    <div className="subtotal_row">
                                        <h5><strong>Coupon Discount:</strong></h5>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <p><strong>{`${value}`}</strong></p>
                                            )}
                                            decimalScale={2}
                                            value={amount * 0.1}
                                            thousandSeparator={true}
                                            prefix={"Ksh. "}
                                        />
                                    </div> 

                                    <div className="subtotal_row">
                                        <h5><strong>Order Total with Discount:</strong></h5>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <p><strong>{`${value}`}</strong></p>
                                            )}
                                            decimalScale={2}
                                            value={amount * 0.9}
                                            thousandSeparator={true}
                                            prefix={"Ksh. "}
                                        />
                                    </div>

                                    </>                                                                           
                                    : */}
                                    <div className="subtotal_row">
                                        <h5><strong>Order Total:</strong></h5>
                                        <CurrencyFormat
                                            renderText={(value) => (
                                                <p><strong>{`${value}`}</strong></p>
                                            )}
                                            decimalScale={2}
                                            value={amount}
                                            thousandSeparator={true}
                                            prefix={"Ksh. "}
                                        />
                                    </div>  
                                    {/* } */}

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
                                        <input onChange={formValidation} onPaste={formValidation} className="input_fields" type="text" id="client_name" name="client_name" required></input>
                                    </div>
                                    <div className="checkout_row_form">
                                        <h5 className="login_labels">Phone Number:</h5>
                                        <input onChange={formValidation} onPaste={formValidation} className="input_fields" type="text" id="client_contact_number" name="client_contact_number" required></input>
                                    </div>
                                    {
                                        !lnmFormFilled &&
                                        <p className="warning">{phoneWarning}</p>
                                    }
                                    <div className="checkout_row_form">
                                        <h5 className="login_labels" >Email:</h5>
                                        <input onChange={formValidation} onPaste={formValidation} className="input_fields" type="text" id="client_email" name="client_email" required></input>
                                    </div>
                                    {
                                        !lnmFormFilled &&
                                        <p className="warning">{mailWarning}</p>
                                    }
                                    <div className="checkout_row_form">
                                        <h5 className="login_labels" >Special Requests: </h5>
                                        <textarea onChange={formValidation} onPaste={formValidation} className="input_fields" name="client_requests" type="text" id="requests" rows="4" cols="60" required></textarea>
                                    </div>
                                    {
                                        detailsWarning !== "" &&
                                        <p className="warning final">{detailsWarning}</p>
                                    }

                                    <p className="warning">Please include information about specific pickup or delivery location in your special requests</p>

                                    {/* <input type="checkbox" id="isNewMember"  name="isNewMember" value="Member"></input>
                        <label for="isNewMember" className="login_labels">Would you like to sign up?</label> */}
                                </form>

                                {/* <Coupon amount={amount}/> */}
{/* <section>
    <div className="coupon_section">
    <h5 className="login_labels" >Do you have a Coupon Code?</h5>
    <form id="coupon_form" onSubmit={handleCouponSubmit}>
        <input 
        onChange={handleCodeEntry}
        onPaste={handleCodeEntry}
        className="coupon_input" type="text" id="coupon_code" name="coupon_code" placeholder="Do you have a Discount or Coupon Code"></input>
        <button className='btns'>Apply</button>
    </form>
    </div>
    <p className="warning coupon_error">{couponError}</p>
</section> */}
                                {/* LIPA NA MPESA */}

                                <section className="temp_lipa_na_mpesa">
                                    <div className="mpesa_process_div">
                                        <div className="actual_process">
                                            <h3>Lipa na M-pesa</h3>
                                            <p>1. Open your M-pesa</p>
                                            <p>2. Select Buy Goods and Services</p>
                                            <p>3. Enter Till No. <strong>5830891</strong></p>
                                            <p>4. Enter the Amount: 
                                            {/* <strong>{ isCoupon ? amount * 0.9 : amount }</strong> */}
                                            </p>
                                            <p>5. Enter Your Pin</p>
                                            <p>6. Confirm the name <strong>"SHARU COSMETICS"</strong></p>
                                        </div>
                                        <form className="mpesa_process_form" onSubmit={handleOrderDetails}>
                                            <p>Please provide the following information to confirm payment</p>
                                            <div className="checkout_row_form">
                                                <h5 className="login_labels">Enter Phone Number:</h5>
                                                <input onChange={formValidation} onPaste={formValidation} className="input_fields lnm_number" name="client_mpesa_number" type="text" required></input>
                                            </div>
                                            {
                                                !lnmFormFilled &&
                                                <p className="warning">{phoneWarning}</p>
                                            }
                                            <div className="checkout_row_form">
                                                <h5 className="login_labels">M-PESA Confirmation Code:</h5>
                                                <input onChange={formValidation} onPaste={formValidation} className="input_fields lnm_mpesa_code" name="client_mpesa_code" type="text" required></input>
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
                    <div className="nothing_in_cart">
                        <p>You have no products in your cart</p>
                        <Link to="/" className="back_to_home_div btns">
                            <NavigateBeforeRounded />
                            <button>Back to Home</button>
                        </Link>
                        <Link to="/products" className="back_to_home_div btns">
                            <NavigateBeforeRounded />
                            <button>Shop Products</button>
                        </Link>
                    </div>

            }
        </div>
    )
}
