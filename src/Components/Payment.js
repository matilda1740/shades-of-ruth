import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import './Payment.css'
import { getSubTotal } from './reducer';
import { useStateValue } from './StateProvider';

export default function Payment() {

    const [ {cart}, dispatch ] = useStateValue();

    // Remove from cart upon success 
    return (
        <div className="payment_page">
            {
                cart.length > 0 ? 
            <div> 
                <div className="payment_stuff_div">
                    <div className="product_preview">
                        <h4>Product Preview</h4>
                            {cart.map( item => (
                                <CartProduct 
                                    className="payments_products"
                                    id={item.id}
                                    type={item.type}
                                    name={item.name}
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                />
                            ))}
                    </div>

                    <div className="payment_options">
                        <div className="payment_subtotal">
                            <h4><strong>Subtotal:</strong></h4>
                            <CurrencyFormat
                                renderText={ (value) => (
                                    <p><strong>{`${value}`}</strong></p>
                                )}        
                                decimalScale={2}
                                value={getSubTotal(cart)}
                                thousandSeparator={true}
                                prefix={"Ksh. "}
                            />
                            {/* Add delivery fees */}
                        </div>

                        <div className="payment_modes">
                        {/* Modes of payment - Integrate stripe and mpesa */}
                        {/* Check box mpesa or credit cart */}
                        </div>
                    </div>
                    {/* Still Right Side  */}
                    <div className="confirm_or_cancel">
                            <button className="confirm_pay">Confirm Payment</button>
                    </div>
                </div>
                {/* Bottom Div */}
                <div className="shopping_or_payment">
                    <Link to="/products">
                        <button className="shopping">Continue Shopping</button>
                    </Link>
                    <Link to="/checkout">
                        <button className="shopping">Back to Cart</button>
                    </Link>
                </div>

                <div className="payment_message">
                    <div  className="pay_success">
                        <h4>Payment Completed Successfully</h4>
                        <p>Thank you for Shopping with us.</p>
                    </div>
                    <div  className="pay_failure">
                        <h4>Sorry payment failed</h4>
                    </div>
                </div>                
            </div>

            :
            <div className="nothing_in_payments">
                <p>Sorry you have no items in your cart :</p>
            </div>
            }
        </div>
    )
}
