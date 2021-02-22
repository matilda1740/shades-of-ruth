import React from 'react'
import CartProduct from './CartProduct';
import Footer from './Footer';

import './CheckOut.css'
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getSubTotal } from './reducer'

export default function CheckOut() {

    const [ {cart} ] = useStateValue();

    return (
        <section className="checkout_page">
            <h4>You have {cart.length} {cart.length === 1 ? `item` : `items`} in your cart</h4> 
            
            <div className="checkout_product">
                {cart.map( item => (
                    <CartProduct 
                        id={item.id}
                        type={item.type}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </div>

            <div className="checkout_subtotal">
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
            </div>

            <div className="pickup_or_delivery">
                <h5>Would you prefer pickup or delivery?</h5>
                {/* Insert icons - make them clickable */}
                {/* Pickup - straight to payment - select pick up station*/}
                {/* Delivery - delivery page and add delivery charges to subtotal */}
                {/* Generate form that let's us know where it needs to go  */}

            </div>
            <div className="shopping_or_payment">
                <Link to="/products">
                    <button className="shopping">Continue Shopping</button>
                </Link>
                <Link to="/payment">
                    <button className="payment">Proceed to Payment</button>
                </Link>
            </div>

            <Footer />            
        </section>

    )
}
