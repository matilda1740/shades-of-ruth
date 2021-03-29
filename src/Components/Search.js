/* eslint-disable array-callback-return */
import React from 'react'
import './Search.css'
import {SearchRounded} from '@material-ui/icons';
import HomeProducts from "./HomeProducts"
import { Link, Route, Switch } from 'react-router-dom';

export default function Search({products}){

    let searchResults = document.querySelector(".searching_dropdown");
    let resultsArr = [];

    const filterProducts = target => {
        products
            .filter(item => !item.name.toLowerCase().split(" ").join("")
            .includes(target))
            .forEach(item => searchResults.classList.add("filtered"))
            // .map(item => {
            //     item && 
            //         !resultsArr.includes(item) &&
            //         resultsArr.push(item)
                    
            //     return resultsArr;
            // })
    }

    const triggerSearch = (e) => {
        let value = e.target.value.toLowerCase().trim().split(" ").join("");

        if(value.length === 0 ){
            searchResults.classList.add("filtered")
        }else{
            console.log("Searching....", value);
            // searchResults.classList.remove("filtered")
            filterProducts(value);

            // console.log("Results:", resultsArr )

            // resultsArr.map( result => {
            //     searchResults.innerHTML += 
            //     `<div class="each_result">
            //     <p>${result.name}</p>
            //     </div>` 
            // })

        }
    }

    // const searchToproducts = () => {

    //     resultsArr.map( item => {
    //         <HomeProducts 
    //             key={item.id}
    //             id={item.id}
    //             type = {item.type}
    //             name = {item.name}
    //             image={item.src}
    //             description={item.description}
    //             price={item.price}
    //         />
    //     })
    // }

    return (
        <>
            {/* Dropdown option */}
            <div className="search_bar">
                <form className="search_form" action="">
                    <input 
                    type="text" onChange={triggerSearch} />
                    <SearchRounded className="search_icon"/>        

                </form>
                <div className="searching_dropdown filtered"></div>                
            </div>
        </>
    )
}

