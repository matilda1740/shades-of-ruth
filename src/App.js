import React, { useEffect } from 'react';
import "./App.css";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import WishList from './Components/WishList';
import CheckOut from './Components/CheckOut';
import Payment from './Components/Payment';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { auth } from "./Components/firebase";
import { useStateValue } from './Components/StateProvider';
import Login from './Components/Login';


export default function App(){

  const [ {}, dispatch] = useStateValue();

  useEffect(() => {

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
    }, []);

  return (
    <Router> 
    <section className='app'>
      <div className="home_page">

        <div className="main_header">
          <Header />
          <div className="all_pages_inner">
              <Switch> 
                <Route exact path="/" component={Home} /> 
                <Route path="/login" component={Login} />
                <Route path="/products" component={AllProducts} /> 
                <Route path="/wishlist" component={WishList} />
                <Route path="/checkout" component={CheckOut} />
                <Route path="/payment" component={Payment} />
              </Switch>
          </div>                   
          
        </div>
        <Sidebar/>
      </div>
    </section>
    </Router>

  )
}


