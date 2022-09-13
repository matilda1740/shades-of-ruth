import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './AllProducts.css'
import Categories from './Categories'
import ProductLayout from './ReusableComponents/ProductLayout'

export default function AllProducts({products}) {
    // let [searchparams] = useSearchParams();
    // console.log(searchparams)

    // const [currentView, setCurrentView] = useState("");

    // useEffect( () => {

    // }, [currentView])
    return (
        <section className="allProducts_page">
            <div className="innerProducts">
                <div className="products_sidebar">
                    <Categories products={products}/>
                </div>
                <div className="products_container">
                {                   
                products.map( item => (
                    <ProductLayout 
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
            </div>            
        </section>
    )
    }
