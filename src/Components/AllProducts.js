import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import Categories from './Categories'
import HomeProducts from './HomeProducts'
import Footer from './Footer'
import { useStateValue } from './StateProvider'
import { useHistory } from 'react-router'

export default function AllProducts({products}) {


    const [{cart, wishlist}, dispatch]  = useStateValue(); 

    const [ isLipsticks, setIsLipsticks ] = useState(false);
    const [ isShadows, setIsShadows ] = useState(false);
    const [ allItems, setAllItems ] = useState(false);

    let currentItems = [];
    // let lippies = [];
    // let shadows = [];

    const history = useHistory();

    const checkProductActive = (location) => {
        if(location.pathname === "/products/lipsticks") {

            // products.filter( product => product.type === "Lipsticks" && lippies.push(product) )
            // console.log("Lipsticks Page: ", lippies)
            products.filter( product => product.type === "Lipsticks" && currentItems.push(product) )
            console.log("Lipsticks Page: ", currentItems)
            setIsLipsticks(true);
            setIsShadows(false);
            setAllItems(false);
        }else if(location.pathname === "/products/eye_shadows"){

            products.filter( product => product.type === "Eye-Shadows" && currentItems.push(product) )
            console.log("Eye-Shadows Page: ", currentItems)

            setIsLipsticks(false);
            setIsShadows(true);
            setAllItems(false);

        }else if(location.pathname === "/products"){

            currentItems.push(products);
            setIsLipsticks(false);
            setIsShadows(false);
            setAllItems(true);
        }
            return currentItems;

    }

    // useEffect( () => checkProductActive(), [])
    useEffect(() => {
        return history.listen((location) => {
            checkProductActive(location);
        })
    },[history])

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
            
            <Footer/> 
        </section>
    )
    }
