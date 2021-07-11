import React, { useEffect, useState  }  from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { auth } from "./Components/firebase";
import { useStateValue } from './Components/StateProvider';
import Login from './Components/Login';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import HomeProducts from './Components/HomeProducts';
import EachProduct from './Components/EachProduct';
import WishList from './Components/WishList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Error from './Components/Error';

import SuccessPage from './Components/SuccessPage'; 
import Failure from './Components/Failure'; 

import axios from './Components/axios.js';
// STRIPE
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import About from './Components/About';
import User from './Components/User';
import MobileNav from './Components/MobileNav';
import Lipsticks from './Components/Lipsticks';
import Shadows from './Components/Shadows';
import ScrollToTop from './Components/ScrollToTop';
import Coupon from './Components/Coupon';

const stripePk = loadStripe('pk_test_51HPvTxEaginv2FOA9RsSDHDBh05VKPgKZDByT2Ab0mJH83OD01DtK8FHr1kWCx9aV26fOXUCNyb902ExqamMKBDf00uKPGdX3z');

export default function App(){

  const [{cart, wishlist}, dispatch] = useStateValue();
  const [productInfo, setProductInfo] = useState();

  
  const getData = async () => {
    try{
      const response = await axios.get('data.json');
      setProductInfo(response.data)
    }
    catch(error){
      console.log(error);
    }
  }

  const [mobileNav, setMobileNav] = useState(false);

  // LOCAL STORAGE
  cart?.length !== 0 && localStorage.setItem('cart', JSON.stringify(cart))
  wishlist?.length !== 0 && localStorage.setItem('wishlist', JSON.stringify(wishlist))

  cart?.length === 0 && localStorage.removeItem('cart')
  wishlist?.length === 0 && localStorage.removeItem('wishlist')
 
  useEffect(() => {
    getData();

    // Firebase Authentication
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "set_user",
          user: authUser,
        });
      } else {
        dispatch({
          type: "set_user",
          user: null,
        });
      }
    });

    window.screen.width <= 812 ? setMobileNav(true) : setMobileNav(false)
    
    }, []);


  return (
    <Router> 
    <ScrollToTop />
    <section className='app'>
      <div className="home_page">
        <div className="main_header">
          { productInfo &&
            <Header products={productInfo.products} />
          }
          <div className="all_pages_inner">
              <Switch> 
                <Route 
                  exact path="/" 
                  render={() => (
                  productInfo && <Home info={productInfo.home}/>
                  )} 
                /> 
                {/* <Route exact path="/login" component={Login} /> */}
                {/* <Route exact path="/about-us" component={About} /> */}
                {/* <Route exact path="/mobile" component={MobileNav} />                 */}
                {/* <Route exact path="/user" component={User} />   */}

                <Route 
                  exact path="/products" 
                  render={() => (
                    productInfo && <AllProducts products={productInfo.products} />
                  )} 
                />  
                 <Route 
                  exact path="/lipsticks" 
                  render={() => ( productInfo &&  <Lipsticks products={productInfo.products}  />
                  )} 
                />      
                                 <Route 
                  exact path="/eye_shadows" 
                  render={() => ( productInfo &&  <Shadows products={productInfo.products}  />
                  )} 
                /> 


                {/* <Route 
                  exact path="/products/product_:id"
                  render={(props) => (
                    productInfo && <EachProduct url={props} products={productInfo.products}/>
                  )} 
                /> */}
                <Route exact path="/wishlist" component={WishList} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/coupon" component={Coupon} />                
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/order_success" component={SuccessPage} />                
                {/* <Route exact path="/order_failure" component={Failure} />                     */}
                <Route exact path="*" component={Error} />

              </Switch>
          </div>                            
        </div>
        {/* <Sidebar/> */}
      </div>
    </section>
    </Router>

  )
}



