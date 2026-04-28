import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAuth } from '../../../contexts/AuthContext'

import { LoginRounded } from '@mui/icons-material';
import { Chip, Divider } from '@mui/material';

import Form, { FormContext } from '../../ReusableComponents/Form/index.js'
import FormInput from '../../ReusableComponents/FormInput'
import ErrorMessage from '../../ReusableComponents/ErrorMessage/index.js';
import Button from '../../ReusableComponents/Button/index.js';
import { ReactComponent as GoogleIcon } from '../../../assets/images/google.svg'
import { useSignal } from '../../../Hooks/useSignal';
import SignalMessage from '../../ReusableComponents/SignalMessages';


const initialValues = {
    email: '',
    password: ''
}

export default function Login() {
    const navigate = useNavigate();
    const { loginUser } = useAuth(); 

    const [invalid, setInvalid] = useState(false);
    const [errorMsg, setErrorMsg] = useState("Invalid Username or Password");


    const { isAlert, alertType, alertMsg, displaySignal } = useSignal()

    const handleSubmit = async (event, form) => {
        event.preventDefault();
        try{
            await loginUser({...form});
            await displaySignal("Login Successful", "success", "/");
        }catch(error){
            if(error.code === "auth/wrong-password"){
                displaySignal("Invalid Username or Password", "failure");
            } 
        }
    }

    return (
    <Form 
        handleSubmit={handleSubmit} formInitialValues={initialValues} 
        variant={"form_row"} icon={<LoginRounded />}
        btnText={"Login"} btnType={"submit"} btnVariant={"secondary"} btnPosition={"center"} linkStatus={true} linkText={"Are you a new user?"} linkTrigger={"Sign Up"} linkHref={"/signup"}
    >
        { isAlert && <SignalMessage status={isAlert} message={alertMsg} type={alertType} />}

        <FormContext.Consumer>
            {({form, handleFormChange}) => (
            <>
                <FormInput 
                label="Email Address" 
                name="email" 
                size={"full"} 
                placeholder={"******@gmail.com"} 
                type={"email"} 
                variant={"column covered"}
                />
                <FormInput 
                label="Password" 
                name="password" 
                size={"full"} 
                placeholder={"*********"} 
                type={"password"} 
                variant={"column covered"}
                />                    
            </>
            )}
        </FormContext.Consumer>
        <Button 
            handleClick={() => navigate("/reset")}
            type={"button"}
            text={"Forgot Password?"}
            variant={"nobg"}
        />         
        <Button 
            type={"button"}
            text={"Sign In with Google"}
            icon={<GoogleIcon />}
            variant={"outlined"}
        /> 
        <Divider><Chip label="or" /></Divider>
    </Form>
    )
}
