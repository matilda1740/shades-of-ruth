import React, { Component } from 'react'
import './Home.css'
import Tags from './Tags';
import Footer from './Footer';
import { Link, BrowserRouter as Router} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <Router>
                <div className="banner_model">
                    <img src="/images/banner1.jpg" alt="Banner Model"/>
                </div>

                <Link to="/products">
                    <Tags title = "Shop Lipsticks" />
                 </Link>
                
                <div className="lipsticks">
                    <div className="products_home">
                    <img src="./images/home_product2.jpg" alt="Lipsticks" />
                    </div>

                    <div className="products_home">
                    <img src="./images/home_product2.jpg" alt="Lipsticks" />
                    </div>   

                </div>

                <Link to="/products">
                    <Tags title = "Shop Eye-Shadows" />
                </Link>

                <div className="shadows">
                    <div className="products_home">
                    <img src="./images/shadow1.jpg"
                    alt="Eye-Shadows" />
                    </div>  

                    <div className="products_home">
                    <img src="./images/shadow3.jpg" alt="Eye-Shadows" />
                    </div>  

                    <div className="products_home">
                    <img src="./images/shadow2.jpg" alt="Eye-Shadows" />
                    </div>                      
                </div>

                <Link to="/products">
                    <Tags title = "Our Offers" />
                </Link>

                <div className="offers">
                </div>
                <Footer/> 
            </Router>

        )
    }
}
