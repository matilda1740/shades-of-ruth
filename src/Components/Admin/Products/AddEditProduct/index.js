import { Close, LibraryAddOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../../../ReusableComponents/FormInput/index.js';
import ImageInput from '../../../ReusableComponents/ImageInput.js';
import Form, { FormContext, FormColumn, ImageColumn  } from '../../../ReusableComponents/Form/index.js'

const ProductFormStyle = styled.div`

    min-width: 400px;
    min-height: 200px;
    width: fit-content;
    height: fit-content;
    /* width: 100%;
    height: 100%; */
    display: flex;
    flex-direction: column;
    /* border-radius: 12px; */
    background-color: transparent;
    position: absolute;

      .ellipse{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: rgba(52, 29, 23, 1);
            border-radius: 50%;

            svg {color: #f8f8f8;}
            :hover{ cursor: pointer;}

            position: relative;
            top: -30px;
            left: 98%;
        }

`;
const initialValues = {
    name: "", 
    image: "",
    type: "",
    description: "",
    price: "",
    createdAt: Date.now()
    };
export default function AddEditProduct({closeModal}) {

    const [products, setProducts] = useState({});
    const [prodImage, setProdImage] = useState();

    const getImage = (image) => setProdImage(image);


    const handleSubmit = (event, form) => {
        event.preventDefault();

        // SEND IMAGE TO FIREBASE CONSOLE
        // IF SUCCESSFUL GET REFERENCE TO IMAGE AND APPEND IT TO PRODUCTS
        setProducts({
            ...form,
            image: prodImage,
            createdAt: Date.now()
        })
        console.log("Form Details: ", form, products)
    }
  return (
    <ProductFormStyle>
        <div className="ellipse">
            <Close onClick={closeModal} />
        </div>
        <Form 
            handleSubmit={handleSubmit} formInitialValues={initialValues} 
            variant={"form_row"} icon={<LibraryAddOutlined/>}
            btnText={"Add New Product"} btnType={"submit"} btnVariant={"primary"} btnPosition={"end"}
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
                    variant={"column covered"}
                    />                
                    <FormInput 
                    label="Product Type" 
                    name="type" 
                    size={"full"} 
                    placeholder={"Product Type"} 
                    type={"text"} 
                    variant={"column covered"}
                    />
                    <FormInput 
                    label="Product Price" 
                    name="price" 
                    size={"full"} 
                    placeholder={"Product Price"} 
                    type={"number"} 
                    variant={"column covered"}
                    />
                    <FormInput 
                    label="Product Description" 
                    name="description" 
                    size={"full"} 
                    placeholder={"Product Description"} 
                    type={"text"} 
                    variant={"column covered"}
                    />

                </FormColumn>
                </>
                )}
            </FormContext.Consumer>
        </Form>
    </ProductFormStyle>
  )
}