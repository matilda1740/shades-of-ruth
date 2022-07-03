import React from 'react'
import './WishList.css'

import { useStateValue } from './StateProvider'
import HomeProducts from './HomeProducts';
import { FavoriteRounded, NavigateBeforeRounded } from '@material-ui/icons'
import { Link } from 'react-router-dom';
export default function WishList(){

        const [ {wishlist}] = useStateValue(); 
        
        return (
            <section className="wishlist_page">
                { wishlist.length > 0 ?

                <div className="non_empty_list">
                <h5 className="tags"><FavoriteRounded/>Your Favourite Items<FavoriteRounded/></h5>

                <div className="products_container">

                {wishlist.map( item => (
                    <HomeProducts 
                        key={item.id}
                        id={item.id}
                        type = {item.type}
                        name = {item.name}
                        image={item.image}
                        description={item.description}
                        price={item.price}
                        quantity={item.quantity}
                    />))
                }   
                </div>             
                </div> 
                : 
                <div className="nothing_in_cart">
                    <p>You have no products in your WishList</p>
                    <div className="nothing_navigation">
                    <Link to="/" className="back_to_home_div btns">
                    <NavigateBeforeRounded />
                    <button>Back to Home</button>
                    </Link>
                    <Link to="/products" className="back_to_home_div btns">
                    <NavigateBeforeRounded />
                    <button>Shop Products</button>
                    </Link>  
                    </div>
                
                </div>
                }
            </section>
        )
    }
