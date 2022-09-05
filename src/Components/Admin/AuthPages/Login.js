import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { useAuth } from '../../../Hooks/firebase/userHooks'

import { LoginRounded } from '@mui/icons-material';
import { Chip, Divider } from '@mui/material';

import Form, { FormContext } from '../../ReusableComponents/Form/index.js'
import FormInput from '../../ReusableComponents/FormInput'
import ErrorMessage from '../../ReusableComponents/ErrorMessage/index.js';
import Button from '../../ReusableComponents/Button/index.js';
import { ReactComponent as GoogleIcon } from '../../../assets/images/google.svg'


const initialValues = {
    email: '',
    password: ''
}

export default function Login() {
    const history = useHistory();
    const { loginUser } = useAuth(); 

    const validateForm = () => {

    }

    const handleSubmit = async (event, form) => {
        event.preventDefault();
        try{
            await loginUser({...form})
            await history.push("/admin/products")
        }catch(error){console.log("Login Error: ", error)}
    }

    return (
    <Form 
        handleSubmit={handleSubmit} formInitialValues={initialValues} 
        variant={"form_row"} icon={<LoginRounded />}
        btnText={"Login"} btnType={"submit"} btnVariant={"secondary"} btnPosition={"center"} linkStatus={true} linkText={"Are you a new user?"} linkTrigger={"Sign Up"} linkHref={"/signup"}
    >
        {/* <ErrorMessage status={"invalid"} message={"Invalid Username or Password"} /> */}

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
            handleClick={() => history.push("/reset")}
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
