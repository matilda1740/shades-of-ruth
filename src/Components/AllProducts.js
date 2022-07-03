import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import Categories from './Categories'
import HomeProducts from './HomeProducts'

export default function AllProducts({products}) {

    return (
        <section className="allProducts_page">
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
        </section>
    )
    }
