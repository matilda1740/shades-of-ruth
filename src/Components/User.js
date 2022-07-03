import React, { useState } from 'react'
import "./User.css"

import { auth } from "../firebase.js";


export default function User() {
    const [updateMsg, setUpdateMsg] = useState("");
    const [updateFormFilled, setUpdateFormFilled] = useState(false);

    const msgStyle = { color: updateFormFilled ? `#00DA08`: `#f70000` }

    const confirmEmail = (e) => {
      let mail = document.getElementById("register_email");
      if(e.target.value === null && mail.value === null){
        setUpdateMsg("ⓘ Email Required");
        setUpdateFormFilled(false);

      }else{
      if(e.target.value !== mail.value){
        setUpdateMsg("ⓘ Ensure your Email matches confirm email");
        setUpdateFormFilled(false);
      }else {
          setUpdateMsg("✔️ Your Email is a match 😃");
          setUpdateFormFilled(true);
          setTimeout(() => {
            setUpdateMsg("");
          }, 2000);
              }
      }
    }

    const confirmPass = (e) => {
      let pass = document.getElementById("register_pass");
      if(e.target.value === null && pass.value === null){
        setUpdateMsg("ⓘ Password Required");
        setUpdateFormFilled(false);
      }else {
        if(e.target.value !== pass.value){
        setUpdateMsg("ⓘ Ensure your password matches confirm password");
        setUpdateFormFilled(false);
        }else {
          setUpdateMsg("✔️ Your Password is a match 😃");
         setUpdateFormFilled(true);
          setTimeout(() => {
            setUpdateMsg("");
          }, 2000);
        }
      }
    }
   
    const handleUpdateAccount = () => {
        console.log("Account Updated")
    }

    const handleLogOut = () => {
        console.log("Account Updated");
    }
    return (
        <section className="user">
            <div className="user_dash">
              <div className ="dash_profile">
                  <div className="dash_avatar"><img src="/images/model3.jpg" alt="Account Profile" /></div>
                  <p>User Name <br/> Date Joined January 2020</p>
              </div>
              <div className="dash_selections">Account Details</div>
              <div className="dash_selections">
              <p>My WishList</p>
              <span>0</span>
              </div>
              <div className="dash_selections">
              <p>My Cart</p>
              <span>0</span>
              </div>
              <div className="dash_selections">
              <p>My Orders</p>
              <span>0</span>
              </div>
              <button>Log Out</button>
            </div>
            <div className="user_info">
              <form className="update_form" action="" onSubmit={ handleUpdateAccount}>
                <div className="row_form">
                    <div className="column_form">
                    <h5 className="login_labels">First Name:</h5>
                    <input id="update_fname" name="firstName" className="input_fields" type="text" required></input>
                    </div>
                    <div className="column_form">
                    <h5 className="login_labels">Last Name:</h5>
                    <input id="update_lname" name="lasttName"  className="input_fields" type="text" required></input>
                    </div>
                </div>
                <div className="row_form">
                    <div className="column_form">
                    <h5 className="login_labels">Phone Number:</h5>
                    <input id="update_phone" name="number" className="input_fields" type="text" required></input>
                    </div>
                    <div className="column_form">
                    <h5 className="login_labels">Delivery Address:</h5>
                    <input id="update_address" name="confirmNumber"className="input_fields" type="text" required ></input>
                    </div>                    
                </div>
                <div className="row_form">
                    <div className="column_form">
                    <h5 className="login_labels" >Email:</h5>
                    <input id="update_email" name="email" className="input_fields" type="text" required></input>
                    </div> 
                    <div className="column_form">
                    <h5 className="login_labels" >Confirm Email:</h5>
                    <input id="update_confirmEmail"  name="confirmEmail" className="input_fields" type="text" onChange={confirmEmail} required></input>
                    </div> 
                </div>
                <div className="row_form">
                    <div className="column_form">
                    <h5 className="login_labels" >Password:</h5>
                    <input id="update_pass" name="pass" className="input_fields" type="password"  required></input>
                    </div> 
                    <div className="column_form">
                    <h5 className="login_labels">Confirm Password:</h5>
                    <input id="update_confirmPass" name="confirmEmail" className="input_fields" type="password"  onChange={confirmPass} required></input>
                    </div> 
                </div> 
                <p style={{ color: msgStyle.color }}>{updateMsg}</p>
                <button
                type="submit"
                className="btns update_account_btn">
                Update Account Details
                </button>                               
            </form>
            </div>
        </section>
    )
}
