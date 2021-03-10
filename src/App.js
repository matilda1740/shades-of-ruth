import React, { useEffect, useState  }  from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { auth } from "./Components/firebase";
import { useStateValue } from './Components/StateProvider';
import "./App.css";
import Login from './Components/Login';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import AllProducts from './Components/AllProducts';
import HomeProducts from './Components/HomeProducts';
import WishList from './Components/WishList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Error from './Components/Error';
import axios from './Components/axios.js';
import Completion from './Components/Completion';
// STRIPE
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51HPvTxEaginv2FOA9RsSDHDBh05VKPgKZDByT2Ab0mJH83OD01DtK8FHr1kWCx9aV26fOXUCNyb902ExqamMKBDf00uKPGdX3z');

export default function App(){

  const [{}, dispatch] = useStateValue();
  const [productInfo, setProductInfo] = useState();


  const getData = async () => {
    try{
      const response = await axios.get('data.json');
      console.log("--------------- WAITING -------------");
      console.log("Response", response.data);
      setProductInfo(response.data)
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
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
          { productInfo &&
            <Header products={productInfo.products} />
          }
          <div className="all_pages_inner">
              <Switch> 
                <Route 
                  exact path="/" 
                  render={() => (
                  productInfo && <Home info={productInfo.home} />
                  )} 
                /> 
                <Route exact path="/login" component={Login} />
                <Route 
                  exact path="/products" 
                  render={() => (
                    productInfo && <AllProducts products={productInfo.products} />
                  )} 
                /> 
                <Route 
                  exact path="/search/products" 
                  components={HomeProducts} 
                />                     
                <Route exact path="/wishlist" component={WishList} />
                <Route exact path="/cart" component={Cart} />
                <Route 
                exact path="/checkout" 
                render={() => ( <Checkout stripePromise={stripePromise}/>
                )} 
                />        
                <Route exact path="/card_payment" component={Completion} />
                {/* </Elements> */}
                {/* <Route exact path="/checkout" component={Checkout} /> */}
                <Route exact path="/client" component={Completion} />
                <Route exact path="*" component={Error} />

              </Switch>
          </div>                            
        </div>
        <Sidebar/>
      </div>
    </section>
    </Router>

  )
}


