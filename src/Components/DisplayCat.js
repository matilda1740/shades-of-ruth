import React from 'react'
import Categories from './Categories'
import Footer from './Footer'
import HomeProducts from './HomeProducts'
import Timer from './Timer'

export default function DisplayCat({products}) {
    return (
        <section className="shadows_page">
            {/* <Timer />    */}
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
