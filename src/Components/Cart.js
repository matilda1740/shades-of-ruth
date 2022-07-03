import React from 'react'
import './Cart.css'

import CartProduct from './CartProduct';
import Footer from './Footer';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getSubTotal } from './reducer'
import Process from './Process';
import HomeProducts from './HomeProducts';
import { NavigateBeforeRounded } from '@material-ui/icons';
// import {getproductTotal} from './reducer'

export default function Cart() {

    const [ {cart}] = useStateValue();

    return (
        <section className="cart_page">
        { 
            (!cart?.length) ? 

            <div className="nothing_in_cart">
                <p>You have no products in your cart</p>
                <div className="nothing_navigation">
                <Link to="/" className="back_to_home_div btns">
                <NavigateBeforeRounded />
                <button>Back to Home</button>
                </Link>
                    <Link to="/products" className="back_to_home_div btns">
                <NavigateBeforeRounded />
                <button>Shop Products</button>
                </Link>    
                </div>           
            </div>
            :
            <>
            <Process/>
            <h4>You have {cart?.length} {cart?.length === 1 ? `product` : `products`} in your cart</h4> 
            
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

            <h5 className="question">Would you like to Continue Shopping or Proceed to Checkout?</h5>

            <div className="shopping_or_checkout">
                <Link to="/products">
                    <button className="btns">Continue Shopping</button>
                </Link>
                <Link to="/checkout">
                    <button className="btns">Checkout Products</button>
                </Link>
            </div> 
            
            </> 
        }
        </section>

    )
}
