import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useStateValue } from './redux/StateProvider';

import Customer from './Components/Customer';

import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import WishListPage from './Components/WishListPage';
import Cart from './Components/Cart';
import CheckOut from './Components/CheckOut';
import Error from './Components/Error';
import ScrollToTop from './Components/ScrollToTop';

// AUTH PAGES
import AuthWrapper from './Components/Admin/AuthPages';
import Login from './Components/Admin/AuthPages/Login';
import SignUp from './Components/Admin/AuthPages/SignUp';
import ResetPassword from './Components/Admin/AuthPages/ResetPassword';

// ACCOUNT COMPONENT 
import { Account } from './Components/Account';

// ADMIN COMPONENTS
import Admin from './Components/Admin';
import {Home as AdminHome} from './Components/Admin/Home';

import {Users as AdminUsersTable} from './Components/Admin/ViewPages/Users';
import {Products as AdminProductsTable} from './Components/Admin/ViewPages/Products';
import { Orders as AdminOrdersTable } from './Components/Admin/ViewPages/Orders';

import UpdateForms from './Components/Admin/UpdateForms';
import { ProductForm } from './Components/Admin/UpdateForms/ProductForm';
import { Addresses } from './Components/Admin/ViewPages/Addresses';

export default function App(){

  const {cartListState} = useStateValue();
  const {cart, wishlist} = cartListState;

  // LOCAL STORAGE
  cart?.length !== 0 && localStorage.setItem('cart', JSON.stringify(cart))
  wishlist?.length !== 0 && localStorage.setItem('wishlist', JSON.stringify(wishlist))

  cart?.length === 0 && localStorage.removeItem('cart')
  wishlist?.length === 0 && localStorage.removeItem('wishlist')

  return (
    <Router> 
    <ScrollToTop />
    <section className='app'>
      <Routes>
        <Route path="/" element={<Customer content={<Home />} />}/> 

        <Route path="/products" element={<Customer content={<AllProducts />}/>} /> 

        <Route path="/lipsticks" element={<Customer content={<AllProducts category="Lipsticks" />}/>} />

        <Route path="/eye-shadows" element={<Customer content={<AllProducts category="Eye-Shadow" />}/>} />

        <Route path="/brushes" element={<Customer content={<AllProducts category="Brushes" />}/>} /> 

        <Route path="/wishlist" element={<Customer content={<WishListPage />} />} />

        <Route path="/cart" element={<Customer content={<Cart />} />} />     
        
        <Route path="/checkout" element={<Customer content={<CheckOut />} />} /> 

        <Route path="/login" element={ <AuthWrapper content={<Login />}  />} /> 

        <Route path="/signup" element={ <AuthWrapper content={<SignUp />}  />} /> 

        <Route path="/reset" 
          element={ <AuthWrapper content={<ResetPassword />}  />} /> 

        <Route path="/profile" 
          element={<Customer content={<Account userType="customer" variant="secondary" />} />} />

        {/* TRANSFORM ALL ADMIN ROUTES INTO PROTECTED ROUTES */}
        <Route path="/admin/account" 
          element={<Admin content={<Account userType="admin" variant="" />} />} />


        <Route path="/admin" 
          element={<Admin content={<AdminHome btnHidden={true}/>} />} />

        <Route path="/admin/products" 
          element={<Admin content={<AdminProductsTable />} />} />

        <Route path="/admin/products/create" 
          element={<Admin content={<UpdateForms title="New Product" btnHidden={true} type="productsCreate" content={<ProductForm/>} />} />} />

        <Route path="/admin/orders" 
          element={<Admin content={<AdminOrdersTable />} />} />

        <Route path="/admin/users" 
          element={<Admin content={<AdminUsersTable />} />} />

        <Route path="/admin/locations" 
          element={<Admin content={<Addresses />} />} />

        {/* <Route path="/admin/users/details" 
          element={<Admin content={<AdminUsers />} />} />

        <Route path="/admin/users/create" 
          element={<Admin content={<AdminUsers />} />} /> */}


        {/* <Route path="/coupon" component={Coupon} />                 */}
        {/* <Route path="/order_success" component={SuccessPage} />                 */}
        {/* <Route path="/order_failure" component={Failure} />                           */}
        <Route path="*" element={<Customer content={<Error />} />} /> 
      </Routes>
    </section>
    </Router>

  )
}
