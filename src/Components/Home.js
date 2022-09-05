import React, { useEffect } from 'react'
import './Home.css'
import Footer from './Footer';
import { Link } from 'react-router-dom'
import Slider from './Slider';
import Features from './Features';

import { db } from '../firebase'
import { collection, doc, addDoc, getDoc, setDoc, deleteDoc, Timestamp } from "firebase/firestore"; 

import { useFirestoreGet, useFirebaseStorageGet} from "../Hooks/firebaseHooks";

const product = { 
    createdAt: Timestamp.now(), 
    description: "Rich red color perfect for all occasions",
    image: "https://firebasestorage.googleapis.com/v0/b/shadesofruthbackend.appspot.com/o/products%2Flipsticks%2Fintentions_nobg.png?alt=media&token=632d5ed1-94cb-49ad-b454-05997c83f3e5",
    name: "redwood",
    price: "950",
    type: "lipsticks",
    updatedAt: Timestamp.now()
}
export default function Home( {info} ) {
    
    // const {data, error, loaded} = useFirestoreGet("products")

    // const {data, error, loaded} = useFirebaseStorageGet('/products/lipsticks/redwood_nobg.png')

    // console.log(data, error, loaded);

    // console.log(product)

    const postData = async (type) => {
        const response = await addDoc(collection(db, type), product)
            .then(response => { 
                setDoc(doc(db, type, response.id), {...product, id: response.id} , { merge:true })
            }).catch(error => console.log(error))
    }

    const updateData = async (type, id, data) => await setDoc(doc(db, type, id), data, { merge:true }).catch(error => console.log(error))
    
    const getDataById = async (type, id) => {
        const docSnap = await getDoc(doc(db, type, id)).catch(error => console.log(error))
        return docSnap.data();
    }

    const deleteDataById = async (type, id) => await deleteDoc(doc(db, type, id)).catch(error => console.log(error))
        
    
    useEffect( () => {
        postData("products")
        // updateData("products", "i4LLqG8kWDolfIkI48YR", {price: 1300})
        // getDataById("products", "i4LLqG8kWDolfIkI48YR")

    })
    return (
        <>
        <Slider />
        {/* <h5 className="tags">Our Best Sellers</h5> */}

        <section className="products_home">
            <div className="products_home_part1">
                <div className="product_blob">
                <svg viewBox="250 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F3D9D5" d="M43.9,-41.8C55.8,-32.1,63.4,-16.1,61.5,-1.9C59.6,12.2,48.1,24.5,36.3,37.4C24.5,50.3,12.2,63.9,-1.6,65.5C-15.4,67,-30.8,56.6,-44.2,43.7C-57.6,30.8,-69.2,15.4,-73.2,-4C-77.2,-23.4,-73.7,-46.8,-60.2,-56.5C-46.8,-66.2,-23.4,-62.1,-3.7,-58.5C16.1,-54.8,32.1,-51.5,43.9,-41.8Z" transform="translate(100 100)" />
                </svg>               
                </div>
                <img className="home_img" src="/images/home_bg1.png" alt="Home" />
                <div className="home_product_info">
                    <h4>Shades of Ruth Lipsticks.</h4>
                    <p>Our lipsticks are highly pigmented, with a creamy consistency that dries down to a matte, plus they smell so good</p>
                    <Link to="/lipsticks">
                    <button className="btns call-to-action">Shop Lipsticks</button>
                    </Link>
                </div>
            </div>

            <div className="products_home_part2">
                <div className="product_blob">
                <svg viewBox="-300 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F3D9D5" d="M43.9,-41.8C55.8,-32.1,63.4,-16.1,61.5,-1.9C59.6,12.2,48.1,24.5,36.3,37.4C24.5,50.3,12.2,63.9,-1.6,65.5C-15.4,67,-30.8,56.6,-44.2,43.7C-57.6,30.8,-69.2,15.4,-73.2,-4C-77.2,-23.4,-73.7,-46.8,-60.2,-56.5C-46.8,-66.2,-23.4,-62.1,-3.7,-58.5C16.1,-54.8,32.1,-51.5,43.9,-41.8Z" transform="translate(100 100)" />
                </svg>               
                </div>
                <img className="home_img" src="/images/shadows_nobg.png" alt="Home" />
                <div className="home_product_info">
                    <h4>Shades of Ruth Eye-shadow.</h4>
                    <p>Our Taurus palette has 12 shades, 8 shimmers and 4 mattes, all easily blendable</p>
                    <Link to="/eye-shadows">
                    <button className="btns call-to-action">Shop Taurus</button>

                    </Link>
                </div>
            </div>

            <div className="products_home_part1">
                <div className="product_blob">
                <svg viewBox="250 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F3D9D5" d="M43.9,-41.8C55.8,-32.1,63.4,-16.1,61.5,-1.9C59.6,12.2,48.1,24.5,36.3,37.4C24.5,50.3,12.2,63.9,-1.6,65.5C-15.4,67,-30.8,56.6,-44.2,43.7C-57.6,30.8,-69.2,15.4,-73.2,-4C-77.2,-23.4,-73.7,-46.8,-60.2,-56.5C-46.8,-66.2,-23.4,-62.1,-3.7,-58.5C16.1,-54.8,32.1,-51.5,43.9,-41.8Z" transform="translate(100 100)" />
                </svg>               
                </div>
                <img className="home_img" src="/images/update1/nobg/brushes.png" alt="Home" />
                <div className="home_product_info">
                    <h4>Shades of Ruth Brushes.</h4>
                    <p>Our Taurus palette has 12 shades, 8 shimmers and 4 mattes, all easily blendable</p>
                    <Link to="/brushes">
                    <button className="btns call-to-action">Shop Brushes</button>

                    </Link>
                </div>
            </div>

        </section>
        <Features/>
        </>
    )
}