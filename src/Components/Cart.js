import React from 'react'
import './Cart.css'

import CartProduct from './CartProduct';
import Footer from './Footer';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getSubTotal } from './reducer'
// import {getproductTotal} from './reducer'

export default function Cart() {

    const [ {cart} ] = useStateValue();

    return (
        <section className="cart_page">
        { 
            (!cart?.length) ? <h4>You have no products in your cart</h4>
            :
            <>
            <h4>You have {cart?.length} {cart?.length === 1 ? `product` : `products`} in your cart</h4> 
            
                { 

                cart.map( item => (
                <div className="cart_product" key={item.id} id={item.id} >

                    <CartProduct 
                        id={item.id}
                        type={item.type}
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        quantity={item.quantity}
                    />
                    <div className="each_cart_product">
                        <h3>Product Price: {item.price * item.quantity}</h3>
                    </div>
                </div>
            )
            )}

            <div className="cart_subtotal">
            <h4><strong>Subtotal:</strong></h4>
            <p><strong>
                <CurrencyFormat
                    renderText={ (value) => (
                    `${value}`
                    )}        
                    decimalScale={2}
                    value={getSubTotal(cart)}
                    thousandSeparator={true}
                    prefix={"Ksh. "}
                />
            </strong></p>   
            </div>

            <h5>Would you like to Proceed to Checkout?</h5>

            <div className="shopping_or_checkout">
                <Link to="/products">
                    <button className="btns">Continue Shopping</button>
                </Link>
                <Link to="/checkout">
                    <button className="btns">Proceed to Checkout</button>
                </Link>
            </div> 
            
            </> 
        }

            <Footer />            
        </section>

    )
}
