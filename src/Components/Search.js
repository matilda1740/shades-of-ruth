/* eslint-disable array-callback-return */
import React from 'react'
import './Search.css'
import {SearchRounded} from '@material-ui/icons';
import HomeProducts from "./HomeProducts"
import { Link, Route, Switch } from 'react-router-dom';

export default function Search({products}){

    let searchResults = document.querySelector(".searching_dropdown");
    let resultsArr = [];
//         let value = e.target.value.toLowerCase().trim().split(" ").join("");

    const filterResults = e => {

        if(typeof(searchResults) !== "undefined" && searchResults!==null){
            if(e.target.value.length !== 0){
            searchResults.classList.contains("invisible") &&searchResults.classList.remove("invisible") 

            }else{
             !searchResults.classList.contains("invisible") &&searchResults.classList.add("invisible") 
               
            }
        }
        // searchResults.classList.containts()
    }
    return (
        <section className="search_bar_section">
            <div className="search_bar">
                <form className="search_form" action="">
                    <input 
                    type="text" onChange={filterResults} />
                    <button type="submit" className="search_icon">
                        <SearchRounded/>
                    </button>
                            
                </form>
            </div>

            {/* Dropdown option */}
            <div className="searching_dropdown invisible"></div>                
        </section>
    )
}

