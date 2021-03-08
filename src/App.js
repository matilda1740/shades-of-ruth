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
import axios from './Components/axios';
import Completion from './Components/Completion';

export default function App(){

  const [{}, dispatch] = useStateValue();
  const [productInfo, setProductInfo] = useState();
  const [ isCartActive, setIsCartActive] = useState(false);
  const [ isCheckoutActive, setIsCheckoutActive] = useState(false);
  const [ isCompletionActive, setIsCompletionActive] = useState(false);

  const initialLocalCart = () => {
    return window.localStorage.getItem('cart') && JSON.parse(window.localStorage.getItem('cart'))
  };

  const [ localCart, setLocalCart ] = useState(initialLocalCart);
  
    useEffect( () => {
        window.localStorage.setItem('cart', JSON.stringify(localCart));
    }, [localCart]);

  const getData = async () => {
    try{
      const response = await axios.get('data.json');
      console.log("--------------- WAITING -------------");
      console.log("Response", response.data);
      setProductInfo(response.data)
    }
    catch(error){
      console.log(error);
      alert(error);
    }

  }

  const checkPageActive = () => {
    if(window.location.pathname === "/cart") {
        setIsCartActive(true)
        setIsCheckoutActive(false)
        setIsCompletionActive(false)
    }else if (window.location.pathname === "/checkout"){
        setIsCartActive(true)
        setIsCheckoutActive(true)
        setIsCompletionActive(false)
    }else if (window.location.pathname === "/completion"){
        setIsCartActive(true)
        setIsCheckoutActive(true)
        setIsCompletionActive(true)
    }
  }
  useEffect(() => {
    getData();
    checkPageActive();
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
                    productInfo && <AllProducts products={productInfo.products} localCart={localCart}/>
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
                  render={() => (
                    <Checkout active={isCheckoutActive} />
                  )} 
                /> 
                <Route exact path="/checkout" component={Checkout} />
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


