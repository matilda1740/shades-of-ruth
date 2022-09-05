import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import Categories from './Categories'
import HomeProducts from './HomeProducts'
import { useRouter } from "../Hooks/useRouter"

export default function AllProducts({products, type}) {
    const router = useRouter();
    console.log(router.query?.id)
    const [isSpecific, setIsSpecific] = useState(false);
    const [specificProduct, setSpecificProduct] = useState([]);

    useEffect( () => {
        if(router.query?.id !== undefined){
            setIsSpecific(true)
            setSpecificProduct(...products.filter( item => item.id === router.query?.id))
        }else {
            setIsSpecific(false)
        }
    }, [router.query?.id])
    return (
        <section className="allProducts_page">
            <div className="innerProducts">
                <div className="products_sidebar">
                    <Categories products={products}/>
                </div>
                <div className="products_container">
                {
                    isSpecific ? 
                    <HomeProducts 
                        key={specificProduct.id}
                        id={specificProduct.id}
                        type = {specificProduct.type}
                        name = {specificProduct.name}
                        image={specificProduct.src}
                        description={specificProduct.description}
                        price={specificProduct.price}
                        quantity={specificProduct.quantity}
                    />
                : 
                products.map( item => (
                    type === item.type.toLowerCase() ?
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
                    : type === "all" &&
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
            </div>            
        </section>
    )
    }
