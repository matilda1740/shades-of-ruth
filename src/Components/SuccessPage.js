import React from 'react'
import './SuccessPage.css'
import { CheckCircleOutlineRounded, ThumbUpAltRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Process from './Process';

export default function SuccessPage() {
    return (
        <section className="payment_success_page">
            <Process />
            <div className="payment_success_div">
            <CheckCircleOutlineRounded className="tick_icon"/>
            <p className="pay_response">Your Order Has Been Received <ThumbUpAltRounded className="thumb_icon"/> </p>
            {/* <p className="pay_response">Your Payment is Successful <ThumbUpAltRounded className="thumb_icon"/> </p> */}
            <p>Thank you for Shopping with us! </p>
            <div className="success_btns_div">
                <Link to="/">
                <button className="btns success_btns">Go Home</button>
                </Link>

                <Link to="/products">
                <button className="btns success_btns">More Items</button>
                </Link>
            </div>
            </div>
        </section>
    )
}
