import React from 'react'
import './WishList.css'
import ListProduct from './ListProduct';
import { useStateValue } from './StateProvider'

export default function WishList(){

        const [ {wishlist}] = useStateValue(); 
        return (
            <section className="wishlist_page">
                { wishlist.length > 0 ?

                <div className="non_empty_list">
                <h2>Your Favourite Items</h2>

                { wishlist.map( item => (
                    <ListProduct 
                        key={item.id}
                        id={item.id}  
                        name={item.name}
                        image={item.image}
                        description={item.description}
                        price={item.price}

                    />
                ))}
                </div> 
                : 
                <div className="empty_list">
                    <p><strong> Your Wishlist is empty.... :D</strong></p>
                </div>
                }

            </section>
        )
    }
