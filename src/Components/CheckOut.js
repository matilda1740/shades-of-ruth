import React, { useState } from 'react'
import './Checkout.css'

import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import Process from './Process';
import { getSubTotal } from './reducer';
import { useStateValue } from './StateProvider';

// ASK USER 1. ARE YOU A MEMBER - LOGIN 2. IF NOT Sign UP or proceed without signing up
// EACH PRODUCT WITH ITS TOTAL + PRODUCT TOTAL THEN RENDER SUBTOTAL AFTER DELIVERY FEE
// GET SUBTOTAL + DELIVERY FEE OR PAYMENT FEE

// PLACE ORDER BUTTON SHOULD BE
// 1. SEND STK MPESA PUSH IF MPESA
// 2. SEND STRIPE IF CARD 
// 3. ALL THIS PLUS SEND AN ORDER NOTIFICATION MESSAGE WITH FORM INFO TO BUSINESS
export default function Checkout({active}) {

    const [ {cart}, dispatch ] = useStateValue();

    return (
        <div className="checkout_page">
            {
                cart.length > 0 ? 
            <div> 
            <Process chekoutActive={active}/>
                {/*LEFT SIDE DIV */}
                <div className="client_details">
                    {/* FORM */}
                </div>
                {/* RIGHT SIDE DIV */}
                <div className="checkout_page_right">
                    <div className="checkout_details">
                        <div className="product_preview"> 
                            <h4>Product Preview</h4> 
                                {cart && cart.map( item => (
                                    <CartProduct 
                                    className="checkouts_products"
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
                            <h4><strong>Products Total:</strong></h4>
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

                    {/* P/D */}


                </div>

                {/* SUBTOTAL WITH FEE */}

                {/* DIV WITH PAYMENT OPTIONS */}

                {/* PLACE ORDER BUTTON THAT LINKS TO CONFIRMATION PAGE */}
                {/* BOTTOM DIV */}
                <div className="shopping_or_checkout">
                    <Link to="/products">
                        <button className="btns">Continue Shopping</button>
                    </Link>
                    <Link to="/cart">
                        <button className="btns">Back to Cart</button>
                    </Link>
                </div>              
            </div>
            :
            <div className="nothing_in_checkout">
                <p>Sorry you have no items in your cart :</p>
            </div>
            }
        </div>
    )
}
