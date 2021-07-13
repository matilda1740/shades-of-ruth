import React, { useEffect, useState } from "react";
import "./Timer.css";

export default function Timer() {

    const [timesUp, setTimesUp] = useState(false); 

    const calculateTimeLeft = () => {

        let year = new Date().getFullYear();
        let difference = +new Date(`07/31/${year}`) - +new Date();

        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
            };
        }else{
            setTimesUp(true);
        } 
        return timeLeft;
    } 
    const [time, setTimeLeft] = useState({}); 


    useEffect(() => {
        const timer=setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    })

    return (
        <section className="timer_section">
        { 
            window.location.pathname === "/products" ?
            <h3>PRODUCTS MEGA SALE !!!</h3>
             : window.location.pathname === "/lipsticks" ?
             <h3>LIPSTICKS MEGA SALE !!!</h3>
            : window.location.pathname === "/eye_shadows" && 
            <h3>EYE-SHADOWS MEGA SALE !!!</h3>
        }
            
            { !timesUp ?
                <div className="timing_cont">
                    <p>Days<span>{time.days}</span> </p>
                    <p>Hours<span>{time.days}</span></p>
                    <p>Minutes<span>{time.minutes}</span></p>
                    <p>Seconds<span>{time.seconds}</span></p>
                </div>
            :
                <div className="timing_cont timesup">     
                <p>This Sale Is Over</p>    
                </div>
            }

        </section>
    )
}
