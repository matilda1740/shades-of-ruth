import React, { Component } from 'react'
import './Footer.css'

import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import CallRoundedIcon from '@material-ui/icons/CallRounded';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className ="footer_top">
                    <div className="top_left">
                        <p>Shop</p>
                        <ShoppingBasketRoundedIcon className="footer_icons"/>
                        <p>Lipsticks</p>
                        <p>Eye Shadows</p>
                    </div>
                    <div className="top_middle">
                        <img className="brandName" src="./images/brand.png" alt="Shades of Ruth" />
                    </div>
                    <div className="top_right">
                        <p>Contact Us</p>
                        <CallRoundedIcon className="footer_icons"/>
                        <br/>
                        <a href="tel:+25495360960">+25495360960</a> <br/>
                        <a href="mailto:matilda1740@gmail.com">matilda1740@gmail.com</a>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="bottom_left">
                        <p>Designed by Matilda Mwendwa</p>
                    </div>
                    <div className="bottom_middle">
                        <a href="https://www.instagram.com/shadesofruth/" className = "social">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/shadesofruth/" className = "social">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=254795360960&text=link" className = "social">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                    <div className="bottom_right">
                        <p><strong>©</strong>All Rights Reserved Shades of Ruth</p>
                    </div>
                </div>

            </section>
        )
    }
}
