import React, { useEffect, useState  }  from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useStateValue } from './Components/StateProvider';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import WishList from './Components/WishList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Error from './Components/Error';

import SuccessPage from './Components/SuccessPage'; 

import axios from './Components/axios.js';

import About from './Components/About';
import User from './Components/User';
import MobileNav from './Components/MobileNav';
import Lipsticks from './Components/Lipsticks';
import Shadows from './Components/Shadows';
import ScrollToTop from './Components/ScrollToTop';
import Coupon from './Components/Coupon';
import DisplayCat from './Components/DisplayCat';

import { useAxiosGet } from "./Hooks/axiosHooks";
import BranchForm from './Components/Admin/Modals/Branches';
import Admin from './Components/Admin';
import Customer from './Components/Customer';
import LocationForm from './Components/Admin/Modals/Locations';

export default function App(){

  const [{cart, wishlist}, dispatch] = useStateValue();
  const [productInfo, setProductInfo] = useState();
  const [specificProd, setSpecificProd] = useState([]);


  const getSpecificProd = () => {
    productInfo &&
    productInfo.products.map( prod => (
      prod.type === "Brushes" &&
      setSpecificProd(specificProd.concat(prod))
    ))
  }
  
  const getData = async () => {
    try{
      const response = await axios.get('http://localhost:3000/data.json', {
      });
      setProductInfo(response.data, getSpecificProd())
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

  const { data, error, loaded } = useAxiosGet("/admin/products");
  console.log("Firebase Products: ", data);
  
  useEffect(() => {
    getData();
    window.screen.width <= 812 ? setMobileNav(true) : setMobileNav(false)
    }, []);


  return (
    <Router> 
    <ScrollToTop />
    <section className='app'>
      <Switch>
        <Route exact path="/admin" 
          render={() => (<Admin content={<BranchForm />} />)} />
        <Route exact path="/admin/add/locations" 
          render={() => (<Admin content={<LocationForm />} />)} />

        <Route 
          exact path="/" 
          render={() => (
          productInfo && <Customer content={<Home info={productInfo.home} />} />
          )} 
        /> 
        <Route 
          exact path="/products" 
          render={() => (
            productInfo && <Customer content={<AllProducts products={productInfo.products} type="all" />} />
          )} 
        /> 
        <Route 
          exact path="/products:id" 
          render={() => (
            productInfo && <Customer content={<AllProducts products={productInfo.products} type="lipsticks" />} />
          )} 
        />         
        {/* <Route 
          exact path="/lipsticks" 
          render={() => (
            productInfo && <Customer content={<AllProducts products={productInfo.products} type="lipsticks" />} />
          )} 
        />  */}
        <Route exact path="/wishlist" 
          render={() => (<Customer content={<WishList />} />)} />

        <Route exact path="/cart" 
          render={() => (<Customer content={<Cart />} />)} />     
        
        <Route exact path="/checkout" 
          render={() => (<Customer content={<Checkout />} />)} /> 

        {/* <Route exact path="/coupon" component={Coupon} />                 */}
        {/* <Route exact path="/checkout" component={Checkout} /> */}
        {/* <Route exact path="/order_success" component={SuccessPage} />                 */}
        {/* <Route exact path="/order_failure" component={Failure} />                           */}
        <Route exact path="*" render={() => (<Customer content={<Error />} />)} /> 
      </Switch>
    </section>
    </Router>

  )
}

      // {/* <div className="home_page">
      //   <div className="main_header">
      //     { productInfo &&
      //       <Header products={productInfo.products} />
      //     }
      //     <div className="all_pages_inner">
      //         <Switch> 
      //           <Route 
      //             exact path="/" 
      //             render={() => (
      //             productInfo && <Home info={productInfo.home}/>
      //             )} 
      //           /> 
      //           {/* <Route exact path="/login" component={Login} /> */}
      //           {/* <Route exact path="/about-us" component={About} /> */}
      //           {/* <Route exact path="/mobile" component={MobileNav} />                 */}
      //           {/* <Route exact path="/user" component={User} />   */}

      //           <Route exact path="/admin"
      //             render={() => ( <Admin content={<Branches />} />
      //             )}
      //           />

      //           <Route 
      //             exact path="/products" 
      //             render={() => (
      //               productInfo && <AllProducts products={productInfo.products} />
      //             )} 
      //           />  
      //            <Route 
      //             exact path="/lipsticks" 
      //             render={() => ( productInfo &&  <Lipsticks products={productInfo.products}  />
      //             )} 
      //           />      
      //             <Route 
      //             exact path="/eye_shadows" 
      //             render={() => ( productInfo &&  <Shadows products={productInfo.products}  />
      //             )} 
      //           /> 
      //             <Route 
      //             exact path="/brushes" 
      //             render={() => ( specificProd &&
      //                 <DisplayCat products={specificProd} />

      //             )} 
      //           /> 

      //           {/* <Route 
      //             exact path="/products/product_:id"
      //             render={(props) => (
      //               productInfo && <EachProduct url={props} products={productInfo.products}/>
      //             )} 
      //           /> */}
      //           <Route exact path="/wishlist" component={WishList} />
      //           <Route exact path="/cart" component={Cart} />
      //           <Route exact path="/coupon" component={Coupon} />                
      //           <Route exact path="/checkout" component={Checkout} />
      //           <Route exact path="/order_success" component={SuccessPage} />                
      //           {/* <Route exact path="/order_failure" component={Failure} />                     */}
      //           <Route exact path="*" component={Error} />

      //         </Switch>
      //     </div>                            
      //   </div>
      //   {/* <Sidebar/> */}
      // </div> */}

