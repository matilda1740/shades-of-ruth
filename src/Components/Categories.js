import React from 'react'
import './Categories.css';
import Timer from './Timer'

import { NavigateNextRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
export default function Categories({products}) {
    return (
        <div className="categories_div">
        {/* <Timer/>  */}
        <h5>OUR LIPSTICKS</h5>
        {   products &&
            products.map( (item) => (
                <div className="cat_product" key={item.id}>               
                { item.type === "Lipsticks" && 
                    <ul><li><Link to="/lipsticks"><NavigateNextRounded />{item.name}</Link></li></ul>
                }
                </div>
            ))
        }
        <h5>OUR EYE-SHADOWS</h5>
        {   products &&
            products.map( (item) => (
                <div className="cat_product" key={item.id}>
                { item.type === "Eye-Shadows" && 
                    <ul><li><Link to="/eye_shadows"><NavigateNextRounded />{item.name}</Link></li></ul>
                }
                </div>
            ))
        }
        <h5>OUR BRUSHES</h5>
        {   products &&
            products.map( (item) => (
                <div className="cat_product" key={item.id}>
                { item.type === "Brushes" && 
                    <ul><li><Link to="/brushes"><NavigateNextRounded />{item.name}</Link></li></ul>
                }
                </div>
            ))
        }        
        <h5>EVERYTHING SHADES OF RUTH</h5>
        <div className="cat_product">
            <Link to="/products">
            <button className="btns shop_now">Shop Now</button>
            </Link>
        </div>
        </div>
    )
}
