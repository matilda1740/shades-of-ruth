import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import Categories from './Categories'
import HomeProducts from './HomeProducts'
import Footer from './Footer'
import { useStateValue } from './StateProvider'

export default function AllProducts({products}) {

    const [{cart, wishlist}, dispatch]  = useStateValue(); 

    // const [ isLipsticks, setIsLipsticks ] = useState(false);
    // const [ isShadows, setIsShadows ] = useState(false);
    // const [ allItems, setAllItems ] = useState(false);

    // let currentProducts = [];

    // currentProducts.push(products); 

    // const checkProductActive = () => {
    //     if(window.location.pathname === "/products/lipsticks") {
    //         setIsLipsticks(true);
    //         setIsShadows(false);
    //         setAllItems(false);
    //     }else if(window.location.pathname === "/products/eye_shadows"){
    //         setIsLipsticks(false);
    //         setIsShadows(true);
    //         setAllItems(false);
    //     }else {
    //         setAllItems(true);
    //     }
    // }

    // isLipsticks ? currentProducts.push(products.filter( item => item.type === "Lipsticks"))
    // : isShadows ? currentProducts.push(products.filter( item => item.type === "Eye-Shadows"))
    // : currentProducts;


    return (
        // {/* Add PRODUCT TITLE */}
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
            
            <Footer/> 
        </section>
    )
    }
