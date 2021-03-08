import React from 'react'
import './Home.css'
import Footer from './Footer';
import { Link } from 'react-router-dom'

export default function Home( {info} ) {
    return (
        <>
            <div className="banner_model">
                <img src="/images/banner1.jpg" alt="Banner Model"/>
            </div>

            <div className="lipsticks">
            {   
                info ?

                info.map( item => (
                    <div 
                    className="products_home" 
                    key={item.id} 
                    id={item.id}
                    >
                        <img 
                        className="home_img"
                        src={item.src} alt={item.type}/>
                        <div className="products_overlay">
                        <Link to="/products">
                        <button className="overlay_btn">View {item.type}</button></Link>
                        </div>
                    </div>
                )) 
                : 

                <div><h1>Loading...</h1></div>
            } 
            </div>
            <Footer/> 
        </>
    )
}