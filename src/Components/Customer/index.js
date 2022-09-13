import React from 'react'
import Footer from '../Footer';
import Header from '../Header';
import "../../App.css";
import { useAuth } from '../../contexts/AuthContext';
import { useAxiosGet } from '../../Hooks/axiosHooks';
import Loader from '../ReusableComponents/Loader';

export default function Customer(props) {
  const { data, error, loaded } = useAxiosGet('http://localhost:3000/data.json');
  
  const Comp = props.content;

  const { currentUser } = useAuth(); 

  return (
    <div className="home_page">
    <div className="main_header">
        <Header currentUser={currentUser} />
        <div className="all_pages_inner">
        {
          loaded && error ? <p>Error Loading Page</p> 
              : loaded && !error ? <>{React.cloneElement(Comp, data)}</>
          : <Loader />
        }
        <Footer /> 
        </div>                            
    </div>
    </div>
  )
}
