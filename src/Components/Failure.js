import React from 'react'
import { Link } from 'react-router-dom'
import {ClearRounded, SentimentDissatisfiedRounded} from '@mui/icons-material'
import Process from './Process'
export default function Failure() {
    return (
        <section className="payment_failure_page">
        <Process />
        <div className="payment_failure_div">
            <div className="failure_icon_div">
                <ClearRounded className="failure_icon"/>
            </div>
            <p className="pay_response">Transaction Failed. <SentimentDissatisfiedRounded/> </p>
            <p>TWe are currentyly unable to complete your transaction. Please try again later </p>

            {/* <p>There seems to be a problem with your transaction. Please try again! </p> */}
            <div className="success_btns_div">
                <Link to="/">
                <button className="btns success_btns">Go Home</button>
                </Link>

                <Link to="/checkout">
                <button className="btns success_btns">Checkout Products</button>
                </Link>
            </div>        
        </div>
    
        </section>
    )
}
