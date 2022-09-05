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
import ScrollToTop from './Components/ScrollToTop';

// ADMIN COMPONENTS
import BranchForm from './Components/Admin/Branches';
import Admin from './Components/Admin';
import Customer from './Components/Customer';
import LocationForm from './Components/Admin/Locations';

import {Users as AdminUsers} from './Components/Admin/Users';
import {Products as AdminProducts} from './Components/Admin/Products';
import { Orders as AdminOrders } from './Components/Admin/Orders';

import axios from './Components/axios.js';
import { useAxiosGet } from "./Hooks/axiosHooks";
// import Login from './Components/Login';
import UpdateForms from './Components/Admin/UpdateForms';
import AuthWrapper from './Components/Admin/AuthPages';
import Login from './Components/Admin/AuthPages/Login';
import SignUp from './Components/Admin/AuthPages/SignUp';
import ResetPassword from './Components/Admin/AuthPages/ResetPassword';
import { ProductForm } from './Components/Admin/UpdateForms/ProductForm';

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

  useEffect(() => {
    getData();
    window.screen.width <= 812 ? setMobileNav(true) : setMobileNav(false)
    }, []);


  return (
    <Router> 
    <ScrollToTop />
    <section className='app'>
      <Switch>
        <Route exact path="/admin/branches" 
          render={() => (<Admin content={<BranchForm />} />)} />
        <Route exact path="/admin/products" 
          render={() => (<Admin content={<AdminProducts />} />)} />
        <Route exact path="/admin/products/create" 
          render={() => (<Admin content={<UpdateForms title="New Product" btnHidden={true} type="productsCreate" content={<ProductForm/>} />} />)} />

        <Route exact path="/admin/orders" 
          render={() => (<Admin content={<AdminOrders />} />)} />

        <Route exact path="/admin/users" 
          render={() => (<Admin content={<AdminUsers />} />)} />

        <Route exact path="/admin/users/details" 
          render={() => (<Admin content={<AdminUsers />} />)} />

        <Route exact path="/admin/users/create" 
          render={() => (<Admin content={<AdminUsers />} />)} />

        <Route exact path="/admin/locations" 
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
          exact path="/products/:id" 
          render={() => (
            productInfo && <Customer content={<AllProducts products={productInfo.products} />} />
          )} 
        />         
        <Route 
          exact path="/lipsticks" 
          render={() => (
            productInfo && <Customer content={<AllProducts products={productInfo.products} type="lipsticks" />} />
          )} 
        /> 

        <Route 
          exact path="/eye-shadows" 
          render={() => (
            productInfo && <Customer content={<AllProducts products={productInfo.products} type="eye-shadows" />} />
          )} 
        /> 
        <Route 
          exact path="/brushes" 
          render={() => (
            productInfo && <Customer content={<AllProducts products={productInfo.products} type="brushes" />} />
          )} 
        /> 

        <Route exact path="/wishlist" 
          render={() => (<Customer content={<WishList />} />)} />

        <Route exact path="/cart" 
          render={() => (<Customer content={<Cart />} />)} />     
        
        <Route exact path="/checkout" 
          render={() => (<Customer content={<Checkout />} />)} /> 

        <Route exact path="/login" 
          render={() => ( <AuthWrapper content={<Login />}  />)} /> 

        <Route exact path="/signup" 
          render={() => ( <AuthWrapper content={<SignUp />}  />)} /> 

        <Route exact path="/reset" 
          render={() => ( <AuthWrapper content={<ResetPassword />}  />)} /> 

        {/* <Route exact path="/coupon" component={Coupon} />                 */}
        {/* <Route exact path="/order_success" component={SuccessPage} />                 */}
        {/* <Route exact path="/order_failure" component={Failure} />                           */}
        <Route exact path="*" render={() => (<Customer content={<Error />} />)} /> 
      </Switch>
    </section>
    </Router>

  )
}
