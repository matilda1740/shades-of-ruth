import React, { useState } from 'react';
import { LoginRounded } from '@mui/icons-material';

import Form, { FormContext } from '../../ReusableComponents/Form/index.js'
import FormInput from '../../ReusableComponents/FormInput'

export default function ResetPassword() {
    const [resetEmail, setResetEmail] = useState("")

    const initialValues = {
        email: '',
    }

    const handleSubmit = (event, form) => {
        event.preventDefault();
        setResetEmail({
            ...form,
        })
        console.log(form, resetEmail)
    }

    return (
    <Form 
        handleSubmit={handleSubmit} formInitialValues={initialValues} 
        variant={"form_row"} icon={<LoginRounded />}
        btnText={"Reset Password"} btnType={"submit"} btnVariant={"secondary"}
    >
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
            </>
            )}
        </FormContext.Consumer>
    </Form>
    )
}
