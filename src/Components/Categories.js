import React from 'react'
import './Categories.css';

import { NavigateNextRounded } from '@material-ui/icons';
export default function Categories({products}) {
    return (
        <div className="categories_div">
        <h5>OUR LIPSTICKS</h5>
        {   products &&
            products.map( (item) => (
                <div className="cat_product" key={item.id}>               
                { item.type === "Lipsticks" && 
                    <ul><li><NavigateNextRounded />{item.name}(stock)</li></ul>
                }
                </div>
            ))
        }
        <h5>OUR EYE-SHADOWS</h5>
        {   products &&
            products.map( (item) => (
                <div className="cat_product" key={item.id}>
                { item.type === "Eye-Shadows" && 
                    <ul><li><NavigateNextRounded />{item.name}(stock)</li></ul>
                }
                </div>
            ))
        }
        </div>
    )
}
