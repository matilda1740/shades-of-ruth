import React, { useState } from 'react'
import Form, { FormContext } from '../../ReusableComponents/Form/index.js'
import FormInput from '../../ReusableComponents/FormInput'
import styled from "styled-components";
import { AddLocationOutlined } from '@material-ui/icons';

export const LocationFormStyle = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    flex-direction: column;
        background-color: #f4f4f4;
    box-shadow: 3px 11px 120px 1px rgba(14,36,83,0.75);
    border-radius: 12px;
  .form_row{
    width: 100%;
    /* height: 60px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }
`;

export default function LocationForm() {
    const [newDetails, setNewDetails] = useState("");

    const initialValues = {
        name: '',
        amount: null
    }
    // TEMPORARY BRANCHES - REPLACE WITH BRANCHES GOTTEN FROM FIREBASE

    const branches = {
      branchID: "",
      branchName: ""
    }

    const handleSubmit = (form) => (e) => {
        e.preventDefault();
        setNewDetails(form)
        console.log(form)
    }
  return (
    <LocationFormStyle>
        <Form 
          handleSubmit={handleSubmit} formInitialValues={initialValues} 
          variant={"form_row"} icon={<AddLocationOutlined/>}
          btnText={"Add New Location"} btnType={"submit"} btnVariant={"primary"}
        >
            <FormContext.Consumer>
                {({form, handleFormChange}) => (
                <>
                    <FormInput 
                    label="Location Name" 
                    name="name" 
                    size={"full"} 
                    placeholder={"Ngara"} 
                    type={"text"} 
                    variant={"row covered"}                    
                    />
                    <FormInput 
                    label="Delivery Address" 
                    name="amount" 
                    size={"full"} 
                    placeholder={"200"} 
                    type={"text"} 
                    variant={"row covered"}                    
                    />
                </>
                )}
            </FormContext.Consumer>
        </Form>
    </LocationFormStyle>
  )
}
