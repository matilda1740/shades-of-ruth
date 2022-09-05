import React, { useState } from 'react';
import styled from "styled-components";
import { ReactComponent as GoogleIcon } from '../../../assets/images/google.svg'

import { LoginRounded } from '@mui/icons-material';
import { Chip, Divider } from '@mui/material';

import Form, { FormContext } from '../../ReusableComponents/Form/index.js'
import FormInput from '../../ReusableComponents/FormInput'
import ErrorMessage from '../../ReusableComponents/ErrorMessage/index.js';
import Button from '../../ReusableComponents/Button/index.js';

export default function SignUp() {
    const [loginDetails, setSignUpDetails] = useState("")

    const initialValues = {
        email: '',
        password: ''
    }

    const handleSubmit = (event, form) => {
        event.preventDefault();
        setSignUpDetails({
            ...form,
        })
        console.log(form, loginDetails)
    }

    return (
    <Form 
        handleSubmit={handleSubmit} formInitialValues={initialValues} 
        variant={"form_row"} icon={<LoginRounded />}
        btnText={"Sign Up"} btnType={"submit"} btnVariant={"secondary"} btnPosition={"center"} linkStatus={true}  linkText={"Already a user?"} linkTrigger={"Log In"} linkHref={"/login"}
    >
        {/* <ErrorMessage status={"invalid"} message={"Invalid Username or Password"} /> */}

        <FormContext.Consumer>
            {({form, handleFormChange}) => (
            <>
                <FormInput 
                label="Full Name" 
                name="fullname" 
                size={"full"} 
                placeholder={"Alice Jones"} 
                type={"text"} 
                variant={"column covered"}
                />              
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
                <FormInput 
                label="Confirm Password" 
                name="confirmpassword" 
                size={"full"} 
                placeholder={"*********"} 
                type={"password"} 
                variant={"column covered"}
                />                                 
            </>
            )}
        </FormContext.Consumer>
        <Button 
            type={"button"}
            text={"Sign Up with Google"}
            icon={<GoogleIcon />}
            variant={"outlined"}
        /> 
        <Divider><Chip label="or" /></Divider>
    </Form>
    )
}
