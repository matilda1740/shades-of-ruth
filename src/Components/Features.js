import React from 'react'
import "./Features.css"
import { LocalAirportRounded, CreditCardRounded, HeadsetRounded } from '@mui/icons-material';
export default function Features({features}) {

    return (
        <div className="features">
            <div className="each_feature">
                <LocalAirportRounded className="feature_icons"/>
                <h4>Country Wide Shipping</h4>
                <p>Goods are delivered to any location</p>
            </div>
            <div className="each_feature">
                <CreditCardRounded className="feature_icons"/>
                <h4>Secure Online Payments</h4>
                <p>We ensure your information is safe</p>
            </div>
            <div className="each_feature">
                <HeadsetRounded className="feature_icons"/>
                <h4>24/7 Online Support</h4>
                <p>Friendly 24/7 customer support</p>
            </div>                        
        </div>
    )
}
