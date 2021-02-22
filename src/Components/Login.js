import React, { useState } from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom';
import { auth } from './firebase'

export default function Login() {

    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [newUser, setNewUser] = useState(false);
    const history = useHistory();

    const [signupMsg, setSignupMsg] = useState("");
    const [formFilled, setFormFilled] = useState(false);
    const [loginMsg, setLoginMsg] = useState("");

    const msgStyle = { color: formFilled ? `#00DA08`: `#f70000` }

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
    const handleEmailLogin = (e) => {
      e.preventDefault();
      auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => {
        let code = err.code;
        if (code === 'auth/wrong-password') {
          setFormFilled(false);
          setLoginMsg("ⓘ Wrong Password");
        }else if(code === 'auth/user-not-found'){
          setFormFilled(false);
          setLoginMsg("ⓘ User not Found. Please check your email or create an account with us");
          setTimeout(() => {
            setLoginMsg("");
          }, 2000);
        }
        console.log(err.message, err.code)
      } );
    }
    // const handlePhoneLogin = (e) => {
    //   e.preventDefault();
    //   auth.signInWithPhoneNumber(number)
    //   .then( data => {}).catch( error => {
    //     let code = error.code;

    //     if()

    //   });
    // }
    // SIGN IN WITH PHONE NUMBER
    const handleRegister = (e) => { 
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => {
        let code = err.code;
        if(code === 'auth/invalid-email'){
          setSignupMsg("ⓘ Invalid Email");

        }else
        console.log(err);
      });
      // Check if all field have been filled
      // If no setSignupMsg("ⓘ Please fill in all the fields") and setFormFilled(false)
    }

    const handleEmail = (e) => {
      setEmail(e.target.value);
    }
    const handlePassword = (e) => {
      setPassword(e.target.value);
    }
    const hanldeNumber = (e) => {
        setNumber(e.target.value);
    }
    const handleCancel = e => {
      e.target.classList.add("choose_display");
      setNewUser(false);
    }

    // SIGN UP VALIDATIONS
    const confirmEmail = (e) => {
      let mail = document.getElementById("email");
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
      let pass = document.getElementById("pass");
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
              <form className="register_form" action="">
                <div className="login_page_logo">
                    <img src="/images/brand2.png" alt="Shades of Ruth Logo"/>
                </div>
                <h2>Sign Up</h2>
                <div className="row_form">
                  <h5 className="login_labels">First Name:</h5>
                  <input className="input_fields" type="text" required></input>
                  <h5 className="login_labels">Last Name:</h5>
                  <input className="input_fields" type="text" required></input>
                </div>
                <div className="row_form">
                  <h5 className="login_labels">Phone Number:</h5>
                  <input className="input_fields" type="text" required></input>
                  {/* Remove Address Field */}
                  <h5 className="login_labels">Address:</h5>
                  <input className="input_fields" type="text" required ></input>
                </div>
                <div className="row_form">
                  <h5 className="login_labels" >Email:</h5>
                  <input className="input_fields" type="text" id="email" required></input>
                  <h5 className="login_labels" >Confirm Email:</h5>
                  <input className="input_fields" type="text" onChange={confirmEmail} required></input>
                </div>
                <div className="row_form">
                  <h5 className="login_labels" >Password:</h5>
                  <input className="input_fields" type="password"  id="pass" required></input>
                  <h5 className="login_labels">Confirm Password:</h5>
                  <input className="input_fields" type="password" id="confirm_pass" onChange={confirmPass} required></input>
                </div>                
                <p style={{ color: msgStyle.color }}>{signupMsg}</p>
                <p>
                ⓘ By signing up you are agreeing to the Shades of Ruth Terms & Conditions of use and sale.
                </p>
                <button
                type="submit"
                onClick={handleRegister}
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
              <form className="login_form" action="">
                <div className="login_page_logo">
                    <img src="/images/brand2.png" alt="Shades of Ruth Logo"/>
                </div>
                <h2>Log in</h2>
                <div className="row_form">
                  <h5 className="login_labels">Email: </h5>
                  <input className="input_fields" type="text" onChange={handleEmail} required/>
                </div>
                <div className="row_form">
                  <h5 className="login_labels">Password: </h5>
                  <input className="input_fields" type="password" onChange={handlePassword} required/>                  
                </div>
                <p style={{ color: msgStyle.color }}>{loginMsg}</p>
                <p>
                ⓘ By signing in you agree to the Shades of Ruth terms and conditions of Use & Sale.
                </p>
                <button
                    type="submit"
                    onClick={handleEmailLogin}
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
            }           
        </div>
    )
}
