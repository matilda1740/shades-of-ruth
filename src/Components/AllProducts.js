import React from 'react'
import './AllProducts.css'
import Footer from './Footer'
import HomeProducts from './HomeProducts'

export default function AllProducts({products}, localCart) {
    return (
        // {/* Add PRODUCT TITLE */}
        <section className="allProducts_page">
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
                />                    
            ))
            }
            </div> 

            <Footer/> 
        </section>
    )
    }

