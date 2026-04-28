import React from 'react'
import './AllProducts.css'
import Categories from './Categories'
import ProductLayout from './ReusableComponents/ProductLayout'

export default function AllProducts({products, category}) {
    // console.log("Incoming products:", products);
    const products_list = products?.products || products || [];

    const filtered_products = category 
        ? products_list.filter(item => item?.type?.toLowerCase().includes(category.toLowerCase()))
        : products_list;

    return (
        <section className="allProducts_page">
            <div className="innerProducts">
                <div className="products_sidebar">
                    <Categories products={products_list}/>
                </div>
                <div className="products_container">
                {                   
                filtered_products.length > 0 ? (
                    filtered_products.map( item => (
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
                ) : (
                    <div className="no_products">
                        <p>No products found in this category.</p>
                    </div>
                )
                }  
                </div> 
            </div>            
        </section>
    )
}
