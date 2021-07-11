import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import Categories from './Categories'
import HomeProducts from './HomeProducts'
import Footer from './Footer'
import Timer from './Timer'
import { useStateValue } from './StateProvider'

export default function AllProducts({products}) {

    const [{cart, wishlist}, dispatch]  = useStateValue(); 

    // const [showSmallTimer, setShowSmallTimer] = useStateValue(false);

    // if (window.innerWidth < 800) {
    //     setShowSmallTimer(true);
    // }else {
    //     setShowSmallTimer(false);
    // }
    // window.onresize = () => {
    // if (window.innerWidth < 800) {
    //     setShowSmallTimer(true);
    // }
    // else {
    //     setShowSmallTimer(false);
    // }
    // }
    return (
        <section className="allProducts_page">
            {/* SMALL TIMER
            { 
                showSmallTimer ?  <Timer /> : <></>
            } */}
             <Timer />
            <div className="innerProducts">
                <div className="products_sidebar">
                    <Categories products={products}/>
                </div>
                <div className="products_container">
                { products.map( item => (
                    <HomeProducts 
                        key={item.id}
                        id={item.id}
                        type = {item.type}
                        name = {item.name}
                        image={item.src}
                        description={item.description}
                        price={item.price}
                        quantity={item.quantity}
                    />))
                }                   
                </div> 
            </div>
            
            <Footer/> 
        </section>
    )
    }
