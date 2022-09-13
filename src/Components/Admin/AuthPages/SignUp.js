import React, { useState } from 'react';
import { ReactComponent as GoogleIcon } from '../../../assets/images/google.svg'

import { LoginRounded } from '@mui/icons-material';
import { Chip, Divider } from '@mui/material';

import Form, { FormColumn, FormContext, ImageColumn } from '../../ReusableComponents/Form/index.js'
import FormInput from '../../ReusableComponents/FormInput'
import ErrorMessage from '../../ReusableComponents/ErrorMessage/index.js';
import Button from '../../ReusableComponents/Button/index.js';
import { useAuth } from '../../../contexts/AuthContext';
import ImageInput from '../../ReusableComponents/ImageInput';
import { useSignal } from '../../../Hooks/useSignal';

const initialValues = {
    fname: "", 
    lname: "", 
    email: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    image: "",
};


export default function SignUp() {

    const [profileImage, setProfileImage] = useState();
    const getImage = (image) => setProfileImage(image);

    const { registerUser } = useAuth(); 

    const { isAlert, alertType, alertMsg, displaySignal } = useSignal()


    const addUserProfile = async (payload,image) => {
        // dispatch({
        //     type: "ADD_USER_PROFILE",
        //     payload,
        //     image
        // })
    }
    const handleSubmit = async (event, form) => {
        event.preventDefault();
        const [ fname, lname, email, phone, dob, gender, password, confirmpassword ] = form;

        if(confirmpassword === password && email !== "") {
            try{
                const response = await registerUser(email,password);
                if(response){
                    addUserProfile({
                        "id": response.user.uid,
                        "fname": fname,
                        "lname": lname,
                        "email": email, 
                        "phone": phone,
                        "dob": dob,
                        "gender": gender
                    }, profileImage)
                        .then(() => displaySignal("Registration Successful!", "success"))
                        .catch(() => displaySignal("Error Adding Product", "failure"))
                }
            }catch(error){console.log("Signup Error: ", error)}
        }
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
            <div className="row">
                <FormInput 
                label="First Name" 
                name="fname" 
                size={"half"} 
                placeholder={"Alice Jones"} 
                type={"text"} 
                variant={"column covered"}
                /> 
                <FormInput 
                label="Last Name" 
                name="lname" 
                size={"half"} 
                placeholder={"Alice Jones"} 
                type={"text"} 
                variant={"column covered"}
                />                 
            </div>
            <div className="row">
                <FormInput 
                label="Email Address" 
                name="email" 
                size={"half"} 
                placeholder={"******@gmail.com"} 
                type={"email"} 
                variant={"column covered"}
                /> 
                <FormInput 
                label="Phone Number" 
                name="phone" 
                size={"half"} 
                placeholder={"+2547********"} 
                type={"number"} 
                variant={"column covered"}
                />         
            </div>
            <div className="row">
                <FormInput 
                label="Date of Birth" 
                name="dob" 
                size={"half"} 
                placeholder={"12th August 1998"} 
                type={"datetime"} 
                variant={"column covered"}
                />     
                <FormInput 
                label="Gender" 
                name="gender" 
                size={"half"} 
                placeholder={"Female"} 
                type={"text"} 
                variant={"column covered"}
                />                  
            </div>  
            <div className="row">
                <FormInput 
                label="Password" 
                name="password" 
                size={"half"} 
                placeholder={"*********"} 
                type={"password"} 
                variant={"column covered"}
                />     
                <FormInput 
                label="Confirm Password" 
                name="confirmpassword" 
                size={"half"} 
                placeholder={"*********"} 
                type={"password"} 
                variant={"column covered"}
                />  
            </div>         
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
