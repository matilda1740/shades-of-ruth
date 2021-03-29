import React, { useState } from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';
import { auth } from './firebase'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Login() {

    // const [email, setEmail] = useState("");
    // const [number, setNumber] = useState("");
    // const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();

    const [signupMsg, setSignupMsg] = useState("");
    const [formFilled, setFormFilled] = useState(false);
    const [loginMsg, setLoginMsg] = useState("");

    const msgStyle = { color: formFilled ? `#00DA08`: `#f70000` }

    // SIGN IN METHODS
    const [emailSignIn, setEmailSignIn] = useState(false);
    const [googleSignIn, setGoogleSignIn] = useState(false);
    const [phoneSignIn, setPhoneSignIn] = useState(false);


    const displayLogin = (e) => {
      e.preventDefault();
      setNewUser(false);
      e.target.classList.add("choose_display");
    }
    const displayRegister = (e) => {
      e.preventDefault();
      setNewUser(true);
      e.target.classList.add("choose_display");
    }

    // SIGN UP VALIDATIONS
    const confirmEmail = (e) => {
      let mail = document.getElementById("register_email");
      if(e.target.value === null && mail.value === null){
        setSignupMsg("ⓘ Email Required");
        setFormFilled(false);

      }else{
      if(e.target.value !== mail.value){
        setSignupMsg("ⓘ Ensure your Email matches confirm email");
        setFormFilled(false);
      }else {
          setSignupMsg("✔️ Your Email is a match 😃");
          setFormFilled(true);
          setTimeout(() => {
            setSignupMsg("");
          }, 2000);
              }
      }
    }
    const confirmPass = (e) => {
      let pass = document.getElementById("register_pass");
      if(e.target.value === null && pass.value === null){
        setSignupMsg("ⓘ Password Required");
        setFormFilled(false);
      }else {
        if(e.target.value !== pass.value){
        setSignupMsg("ⓘ Ensure your password matches confirm password");
        setFormFilled(false);
        }else {
          setSignupMsg("✔️ Your Password is a match 😃");
          setFormFilled(true);
          setTimeout(() => {
            setSignupMsg("");
          }, 2000);
        }
      }
    }
   
    const handleRegister = (e) => { 
      e.preventDefault();
      if(setFormFilled){
        const regEmail = document.getElementById("register_email").value;
        const regPass = document.getElementById("register_pass").value;

        auth
        .createUserWithEmailAndPassword(regEmail, regPass)
        .then((auth) => {
        // GET FORM DATA 
        const formData = document.querySelectorAll(".register_form .input_fields");
        const newUserDetails = []
        formData.forEach( (userData) => newUserDetails.push({ [userData.name] : userData.value}))
        console.log(newUserDetails); //USER DETAILS AS AN ARRAY OF OBJECTS
        setFormFilled(false);
        setSignupMsg("");
        setLoginMsg("");

        history.push("/");
        })
        .catch((error) => {
          console.log(error.code, " " , error.message);
          let code = error.code;
          if (code === 'auth/invalid-email') {
            setSignupMsg("ⓘ Invalid Email. Please Try again");
            setFormFilled(false);
        }else if (code === 'auth/weak-password') {
            setSignupMsg(`ⓘ Weak Password. ${error.message}`);

        }
        });
      }else {
        setSignupMsg("ⓘ Please fill in all the fields");
        setFormFilled(false);
      }
    }
        // SIGN IN Methods
    const sigInDiv = document.querySelector(".signInMethods");
    const displayEmailLogin = (e) => {
      setEmailSignIn(true);
      sigInDiv.classList.add("choose_display")
    }
    const displayGoogleLogin = (e) => {
      setGoogleSignIn(true);
      sigInDiv.classList.add("choose_display")
    }
    const displayPhoneLogin = (e) => {
      setPhoneSignIn(true);
      sigInDiv.classList.add("choose_display")
    }
    // WORKING
    const handleEmailLogin = (e) => {
      e.preventDefault();
      const loginEmail = document.getElementById("login_email").value;
      const loginPass = document.getElementById("login_pass").value;
      auth
      .signInWithEmailAndPassword(loginEmail, loginPass)
      .then((auth) => {
        console.log(loginEmail, loginPass);
        history.push("/");
      })
      .catch((err) => {
        let code = err.code;
        if (code === 'auth/wrong-password') {
          setFormFilled(false);
          setLoginMsg("ⓘ Invalid Password. Please Try again");
        }else if(code === 'auth/user-not-found'){
          setFormFilled(false);
          setLoginMsg("ⓘ User not Found. Please check your email or create an account with us");
          setTimeout(() => {
            setLoginMsg("");
          }, 10000);
        }
        console.log(err.message, err.code)
      } );
    }

    const handleCancel = e => {
      e.target.classList.add("choose_display");
      setNewUser(false);
    }


    return (
        <div className="login_signup_page">
            <div className="choose_page_btns choose_display">
              <button 
              className="btn_login_page show_option show_register"
              onClick={displayRegister} 
              >Sign Up</button>
              <p>ⓘ Do you have an account with us?</p>
              <button onClick={displayLogin} className="btn_login_page show_option show_login">Login</button>
              <button className="btn_login_page cancel_btn">Cancel</button>
            </div>

            { newUser ? 
              
              <form className="register_form" action="" onSubmit={handleRegister}>
                <div className="login_page_logo">
                    <img src="/images/brand2.png" alt="Shades of Ruth Logo"/>
                </div>
                <h2>Sign Up</h2>
                <div className="row_form">
                  <h5 className="login_labels">First Name:</h5>
                  <input id="register_fname" name="firstName" className="input_fields" type="text" required></input>
                  <h5 className="login_labels">Last Name:</h5>
                  <input id="register_lname" name="lasttName"  className="input_fields" type="text" required></input>
                </div>
                <div className="row_form">
                  <h5 className="login_labels">Phone Number:</h5>
                  <input id="register_phone" name="number" className="input_fields" type="text" required></input>
                  <h5 className="login_labels">Delivery Address:</h5>
                  <input id="register_address" name="confirmNumber"className="input_fields" type="text" required ></input>
                </div>
                <div className="row_form">
                  <h5 className="login_labels" >Email:</h5>
                  <input id="register_email" name="email" className="input_fields" type="text" required></input>
                  <h5 className="login_labels" >Confirm Email:</h5>
                  <input id="register_confirmEmail"  name="confirmEmail" className="input_fields" type="text" onChange={confirmEmail} required></input>
                </div>
                <div className="row_form">
                  <h5 className="login_labels" >Password:</h5>
                  <input id="register_pass" name="pass" className="input_fields" type="password"  required></input>
                  <h5 className="login_labels">Confirm Password:</h5>
                  <input id="register_confirmPass" name="confirmEmail" className="input_fields" type="password"  onChange={confirmPass} required></input>
                </div>                
                <p style={{ color: msgStyle.color }}>{signupMsg}</p>
                <p>
                ⓘ By signing up you are agreeing to the Shades of Ruth Terms & Conditions of use and sale.
                </p>
                <button
                type="submit"
                className="btn_login_page solo_btns ">
                Create Account
                </button>
                <p>Do you already have an account with us? </p>   
                <div className="row_form login_last_div">
                  <button 
                  className="btn_login_page final_page_left"
                  onClick={displayLogin} 
                  >Sign In</button>
                  <button 
                  onClick={handleCancel}
                  className="btn_login_page final_page_right">Cancel
                  </button>
                </div>
                </form>
              :
              <div className="signInMethods">
                  <div className="login_page_logo">
                    <img src="/images/brand2.png" alt="Shades of Ruth Logo"/>
                  </div>
                <h3>Sign In Methods</h3>
                  
                  <button className="btn_login_page solo_btns" onClick={displayEmailLogin}>
                  <FontAwesomeIcon className="signIn_icons" icon={ faEnvelope } />
                  Email</button> 
                  <button className="btn_login_page solo_btns" onClick={displayGoogleLogin}>
                  <FontAwesomeIcon className="signIn_icons" icon={ faGoogle } />
                  Google</button> 
                  <button className="btn_login_page solo_btns" onClick={displayPhoneLogin}>
                  <FontAwesomeIcon className="signIn_icons" icon={ faPhoneAlt } />
                  Phone Number</button> 
              </div>
            } 
            <>
            { emailSignIn ?
              <form className="login_form" action="" onSubmit={handleEmailLogin}>
                <div className="login_page_logo">
                    <img src="/images/brand2.png" alt="Shades of Ruth Logo"/>
                </div>
                <h2>Log in</h2>
                <div className="row_form">
                  <h5 className="login_labels">Email: </h5>
                  <input id= "login_email" className="input_fields" type="text" required/>
                </div>
                <div className="row_form">
                  <h5 className="login_labels">Password: </h5>
                  <input id= "login_pass" className="input_fields" type="password" required/>                  
                </div>
                <p style={{ color: msgStyle.color }}>{loginMsg}</p>
                <p>
                ⓘ By signing in you agree to the Shades of Ruth terms and conditions of Use & Sale.
                </p>
                <button
                    type="submit"
                    className="btn_login_page solo_btns">Log In
                </button> 
                <p>New User? Create an account with us... </p>    
                <div className="row_form login_last_div">
                  <button 
                  className="btn_login_page"
                  onClick={displayRegister} 
                  >Sign Up</button>
                  <button className="btn_login_page cancel_btn">Cancel</button>
                </div>
              </form>
              
              : googleSignIn ?

              <form className="google_login_form" action="">

              </form>

              : phoneSignIn && 

              <form className="phone_login_form" action="">
                
              </form>
              }
            </>
        </div>
    )
}
