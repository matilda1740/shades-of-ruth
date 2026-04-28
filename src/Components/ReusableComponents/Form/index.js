import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import ErrorMessage from '../ErrorMessage';

const FormStyle = styled.form`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: scroll;

    &.form_row {
        flex-flow: row wrap;
        padding: 0px;
        overflow-y: hidden;
        justify-content: space-between;
    }
    .error_message {
        color: rgb(209, 4, 4);
    }
    .row {
            width:100%;
    height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }
`;

export const FormHalfContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const FormEachPhoneContainer = styled.div`
    width: 100%;
    font-weight: 300;
    margin-top: 10px;
    :first-of-type{
    margin-right: 5px;
    }
    label {
    color: rgba(18, 53, 91, 0.5);
    }
    .PhoneInput{
    margin: 10px 0 15px 0;
    width: 99%;
    .PhoneInputCountry{
    .PhoneInputCountryIcon {
    box-shadow: 0 0 0 0;
    }
    }
    input {
    width: 100%;
    outline: none;
    border-bottom: 1px solid rgba(18, 53, 91, 0.2);
    border-top: none;
    border-left: none;
    border-right: none;   
    font-weight: 500;

    ::placeholder{
        font-weight: 500;
        color: rgba(18, 53, 91, 1);
    }   
    :focus {
    color:#7f156b;
    ::placeholder{
        color:#7f156b;
    }
    }
    }
    }

    /* BUSINESS FORMS */
    &.business_phone_input{
    width: 50%;
    .PhoneInput{
    background: rgba(243, 245, 247, 1);
    padding: 10px 14px;
    border-radius: 6px;
    margin: 4px 0 15px 0;
    input {
    outline: none;
    border: none;
    background: rgba(243, 245, 247, 1);
        ::placeholder {
        color: rgba(128, 128, 128, 1);

        }
    }
    }
    }
    @media screen and (max-width: 480px) {
    label{ font-size: 12px; }
    /* .PhoneInput{ width: 50%;} */
    }
`;

export const ImageColumn = styled.div`
    /* height: 100%; */
    width: 27.5%;
    margin-right: 2.5%;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    @media screen and (max-width: 786px) {
        width: 100%;
        margin-right: 0;
    }
`;

export const FormColumn = styled.div`
    /* height: 100%; */
    width: 67.5%;
    display: flex;
    flex-direction: column;

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }
    @media screen and (max-width: 786px) {
    width: 100%;
    }
`;


export const FormContext = React.createContext({
    form: {},
});


export default function Form(props) {

    const { icon, children,variant, handleSubmit = () => {} } = props;

    const [form, setForm] = useState({});

    // FORM VALIDATION

    const [error, setError] = useState();
    const [isError, setIsError] = useState(false);

    const activateErrors = (el) => {
        el.style.border ="2px solid rgb(210, 4, 45, 0.6)"
        // el.style.backgroundColor ="rgb(244, 194, 194, 0.9)" 
        setIsError(true)
        setError("Please Ensure all Input Fields are Filled")
        // setIsFormFilled(false)                           
    }
    const deactivateErrors = el => {
        el.style.border = ""
        el.style.backgroundColor =""
        setIsError(false)
        setError("")       
    }

    const handleFormChange = (event) => {
        const { name, value } = event.target;

        if(value === ""){
            activateErrors(event.target) 
        } else{
            deactivateErrors(event.target)
        }
        try {
            setForm({
                ...form,
                [name]: value.replace("C:\\fakepath\\", "")
            });
        }catch (error) {console.log(error)}

};

return (
<FormStyle onSubmit={(event) => handleSubmit(event,form)} className={variant}>
    <FormContext.Provider value={{
        form,
        handleFormChange
        }}>
        { isError && <ErrorMessage status={"invalid"} message={error} /> }       
        {children}
        <Button 
            type={props.btnType}
            text={props.btnText}
            icon={icon}
            variant={props.btnVariant}
            position={props.btnPosition}
        /> 
        {
            props.linkStatus && 
            <div className="auth_footer">
                <p>{props.linkText}</p>
                <Link to={props.linkHref}>{props.linkTrigger}<KeyboardDoubleArrowRightRoundedIcon/></Link>
            </div>             
        }
    </FormContext.Provider>
</FormStyle>
)
}