import React, { useState } from 'react'
import './Coupon.css'
import { useStateValue } from './StateProvider';

export default function Coupon({ amount }) {

    const [ {cart, wishlist}, dispatch] = useStateValue();

    const [validCoupon, setValidCoupon] = useState(false);
    const [couponError, setCouponError] = useState("")
    
    const couponInput = document.getElementById("coupon_form")

    const handleInvalidCode = () => {
        setValidCoupon(false);

        if(typeof(couponInput) !== "undefined" && couponInput!==null){
        couponInput.style.border = `2px solid #f70000`;
        }

        dispatch({
        type: "coupon_code",
        boolean: false,
        total: amount
        }) 
        
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
        setValidCoupon(false);

                handleInvalidCode(); 
                setCouponError("ⓘ Please Enter Valid Coupon Code") 
            }
        }
        else {
        setValidCoupon(false);

            handleInvalidCode()
        }         

 }

    const handleCouponSubmit = (e) => {
        e.preventDefault();
        if(validCoupon){
        dispatch({
            type: "coupon_code",
            boolean: true,
            total: amount
        }) 
        setCouponError("");
        }else{
            setCouponError("ⓘ Please Enter Valid Coupon Code")
        }
    }

    return (
        <section>
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
        </section>
    )
}
