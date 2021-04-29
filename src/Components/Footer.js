import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { ShoppingBasketRounded, CallRounded, SendRounded , PaymentRounded } from '@material-ui/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                {/* SECTION ONE */}
                
                <div className="footer_column">
                    <div className="footer_row">
                        <div className="footer_row_heading">
                        <CallRounded className="footer_icons"/> 
                        <h4>CONTACT US</h4>
                        </div>
                        
                        <br/>
                        <a href="tel:+254790877635">+254790877635</a> <br/>
                        <a href="mailto:shadesofruth@gmail.com">shadesofruth@gmail.com</a> 
                    </div>                

                    <div className="footer_row social_row">
                        <a href="https://www.instagram.com/shadesofruth/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} className="footer_social_icons"/>
                        </a>
                        <a href="https://www.instagram.com/shadesofruth/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faInstagram} 
                                className="footer_social_icons"
                            />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=254790877635&text=Hello" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} 
                                className="footer_social_icons"
                            />
                        </a>
                    </div>

                    <div className="footer_row credits">
                        {/* <p>Designed by Matilda Mwendwa <strong> © </strong>All Rights Reserved Shades of Ruth</p> */}
                        <p>Designed by Matilda Mwendwa</p>

                    </div>
                </div>
               
                {/* SECTION TWO */}
            
                <div className="footer_column">
                    <div className="footer_row fr_sub">
                        <h4>SUBSCRIPTION</h4>
                    </div>
                    <div className="footer_row fr_sub ">
                        <p>To receive latest offers and discounts from the shop.</p>
                    </div>

                    <div className="footer_row fr_sub">
                    <form action="#" method="post">
                    <input type="text" placeholder="Your Email" name="newsletter" required/>
                    <SendRounded />

                    </form>
                    </div>                      
                </div>
               
                {/* SECTION THREE */}
                
                <div className="footer_column">
                    <div className="footer_row">
                        <div className="footer_row_heading">
                        <ShoppingBasketRounded className="footer_icons"/>
                        <h4>SHOP</h4>
                        </div>
                        <br/>
                        <a href="/lipsticks">Lipsticks</a> <br/>
                        <a href="/eye_shadows">Eye-Shadows</a> <br/>
                        <a href="/products">All Products</a> 


                    </div>    
                    {/* <h5>PAYMENT METHODS</h5> */}
                    {/* <div className="footer_row cards_row"> */}
                    {/* <PaymentRounded />
                    <PaymentRounded />
                    <PaymentRounded /> */}
                    {/* </div> */}

                                        <div className="footer_row credits">
                        <p><strong> © </strong>All Rights Reserved Shades of Ruth</p>
                    </div>
                </div>
               
            </section>
        )
    }
}
