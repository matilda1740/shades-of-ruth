import React from 'react'
import './WishList.css'

import { useStateValue } from './StateProvider'
import HomeProducts from './HomeProducts';
import { FavoriteRounded } from '@material-ui/icons'
import Footer from './Footer';
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
                <div className="empty_list">
                    <p><strong> Your Wishlist is empty.... :D</strong></p>
                </div>
                }

                <Footer />
            </section>
        )
    }
