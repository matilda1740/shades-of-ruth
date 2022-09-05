import { AddRounded } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from 'styled-components';
import Form, { FormColumn, FormContext, ImageColumn } from '../../../ReusableComponents/Form';
import FormInput from '../../../ReusableComponents/FormInput';
import ImageInput from '../../../ReusableComponents/ImageInput';


const initialValues = {
    name: "", 
    image: "",
    type: "",
    description: "",
    price: "",
    createdAt: Date.now()
    };

export function ProductForm() {
  const [products, setProducts] = useState({});
    const [prodImage, setProdImage] = useState();

    const [errorMessage, setErrorMessage] = useState("ⓘ Please fill in all the fields");

    const getImage = (image) => setProdImage(image);

    const validateForm = () => {

    }

    const handleSubmit = (event, form) => {
        event.preventDefault();

        // SEND IMAGE TO FIREBASE CONSOLE
        // IF SUCCESSFUL GET REFERENCE TO IMAGE AND APPEND IT TO PRODUCTS
        setProducts({
            ...form,
            image: prodImage,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })
        console.log("Form Details: ", form, products)

    }
    return (
    <Form 
        handleSubmit={handleSubmit} formInitialValues={initialValues} 
        variant={"form_row"} icon={<AddRounded/>}
        btnText={"Submit Details"} btnType={"submit"} btnVariant={"primary"} btnPosition={"end"}
    >
        <FormContext.Consumer>
            {({form, handleFormChange}) => (
            <>
            <ImageColumn>
                <ImageInput getImage={getImage} />
            </ImageColumn>

            <FormColumn>
                <FormInput 
                label="Product Name" 
                name="name" 
                size={"full"} 
                placeholder={"Product Name"} 
                type={"text"} 
                variant={"column covered secondary"}
                />    
                <div className="row">
                <FormInput 
                label="Product Type" 
                name="type" 
                size={"half"} 
                placeholder={"Product Type"} 
                type={"text"} 
                variant={"column covered secondary"}
                />
                <FormInput 
                label="Product Price" 
                name="price" 
                size={"half"} 
                placeholder={"450"} 
                type={"number"} 
                variant={"column covered secondary"}
                />
                </div>            

                <FormInput 
                label="Product Description" 
                name="description" 
                size={"full"} 
                placeholder={"Product Description"} 
                type={"text"} 
                variant={"column covered secondary"}
                />
                <div className="row">
                <FormInput 
                label="Quantity" 
                name="quantity" 
                size={"half"} 
                placeholder={"30"} 
                type={"number"} 
                variant={"column covered secondary"}
                />
                <FormInput 
                label="Stock Status" 
                name="quantity" 
                size={"half"} 
                placeholder={"30"} 
                type={"number"} 
                variant={"column covered secondary"}
                />                       
                </div>

            </FormColumn>
            </>
            )}
        </FormContext.Consumer>
    </Form>
    );
}