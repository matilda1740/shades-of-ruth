import React from 'react'
import Footer from '../Footer';
import Header from '../Header';
import "../../App.css";

export default function Customer({products, content}) {
  return (
    <div className="home_page">
    <div className="main_header">
        <Header products={products} />
        <div className="all_pages_inner">
            {content}
            <Footer /> 
        </div>                            
    </div>
    </div>
  )
}
