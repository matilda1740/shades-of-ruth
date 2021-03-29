import React from 'react'
import './Home.css'
import Footer from './Footer';
import { Link } from 'react-router-dom'
import Slider from './Slider';
import Features from './Features';


export default function Home( {info} ) {

    return (
        <>
        <Slider />
        <h5 className="tags">Our Best Sellers</h5>

        <section className="products_home">

            <div className="products_home_part1">
                <div className="product_blob">
                <svg viewBox="250 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#d0aaaa" d="M43.9,-41.8C55.8,-32.1,63.4,-16.1,61.5,-1.9C59.6,12.2,48.1,24.5,36.3,37.4C24.5,50.3,12.2,63.9,-1.6,65.5C-15.4,67,-30.8,56.6,-44.2,43.7C-57.6,30.8,-69.2,15.4,-73.2,-4C-77.2,-23.4,-73.7,-46.8,-60.2,-56.5C-46.8,-66.2,-23.4,-62.1,-3.7,-58.5C16.1,-54.8,32.1,-51.5,43.9,-41.8Z" transform="translate(100 100)" />
                </svg>               
                </div>
                <img className="home_img" src="/images/home_bg1.png" alt="Home" />
                <div className="home_product_info">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio pariatur ab assumenda placeat at impedit eum nam libero quos!</p>
                    <Link to="/products">
                    <button className="btns call-to-action">Shop Now</button>
                    </Link>
                </div>
            </div>

            <div className="products_home_part2">
                <div className="product_blob">
                <svg viewBox="-300 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#d0aaaa" d="M43.9,-41.8C55.8,-32.1,63.4,-16.1,61.5,-1.9C59.6,12.2,48.1,24.5,36.3,37.4C24.5,50.3,12.2,63.9,-1.6,65.5C-15.4,67,-30.8,56.6,-44.2,43.7C-57.6,30.8,-69.2,15.4,-73.2,-4C-77.2,-23.4,-73.7,-46.8,-60.2,-56.5C-46.8,-66.2,-23.4,-62.1,-3.7,-58.5C16.1,-54.8,32.1,-51.5,43.9,-41.8Z" transform="translate(100 100)" />
                </svg>               
                </div>
                <img className="home_img" src="/images/shadows_nobg.png" alt="Home" />
                <div className="home_product_info">
                    <h4>Lorem ipsum dolor sit amet.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio pariatur ab assumenda placeat at impedit eum nam libero quos!</p>
                    <Link to="/products">
                    <button className="btns call-to-action">Shop Now</button>

                    </Link>
                </div>
            </div>

        </section>
        <Features/>
        <Footer/> 
        </>
    )
}