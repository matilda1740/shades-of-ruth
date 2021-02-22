import React, { Component } from 'react'
import './AllProducts.css'
import Footer from './Footer'
import HomeProducts from './HomeProducts'

export default class AllProducts extends Component{
    render() {
        return (
            <section className="allProducts_page">

            {/* <div className="indent_title">
                    <hr className="indent"/>
                    <h1>Shades of Ruth: Lipsticks</h1>
                </div> */}
                <div className="products_container">

                <HomeProducts 
                    id="1"
                    type = "Lipsticks"
                    name = "Intentions Lipstick"
                    image="images/intentions.jpg"
                    description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, libero!"
                    price="950"
                    active="false"
                />

                <HomeProducts 
                    id="2"
                    type = "Lipsticks"
                    name = "Redwood Lipstick"
                    image="images/redwood.jpg"
                    description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, libero!"
                    price="950"
                    active="false"
                />

                <HomeProducts 
                    id="3"
                    type = "Lipsticks"
                    name = "Plum Lipstick"
                    image="images/plum.jpg"
                    description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, libero!"
                    price="950"
                    active="false"
                />

                <HomeProducts 
                    id="4"
                    type = "Lipsticks"
                    name = "Ruby Lipstick"
                    image="images/ruby.jpg"
                    description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, libero!"
                    price="950"
                    active="false"
                />

                <HomeProducts 
                    id="5"
                    type = "Lipsticks"
                    name = "Rose Lipstick"
                    image="images/rose.jpg"
                    description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, libero!"
                    price="950"
                    active="false"
                />

                <HomeProducts 
                    id="6"
                    type = "EyeShadows"
                    name = "Taurus Collection"
                    image="images/intentions.jpg"
                    description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, libero!"
                    price="950"
                    active="false"
                />

                </div>
                <Footer/> 
            </section>
        )
        }

}
