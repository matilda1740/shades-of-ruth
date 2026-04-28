import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Timestamp } from "firebase/firestore"
import { useStateValue } from '../../../../redux/StateProvider';
import productsReducer, { initialState} from "../../../../redux/reducers/productsReducer";
import styled from 'styled-components';
import Form, { FormColumn, FormContext, ImageColumn } from '../../../ReusableComponents/Form';
import FormInput from '../../../ReusableComponents/FormInput';
import ImageInput from '../../../ReusableComponents/ImageInput';
import { AddRounded } from '@mui/icons-material';
import SignalMessage from '../../../ReusableComponents/SignalMessages';
import { useSignal } from '../../../../Hooks/useSignal';


const initialValues = {
    name: "", 
    image: "",
    type: "",
    description: "",
    price: "",
    createdAt: Timestamp.now()
    };

export function ProductForm() {
    // const navigate = useNavigate();

    const [prodImage, setProdImage] = useState();
    const getImage = (image) => setProdImage(image);

    const { useCallReducer } = useStateValue();
    const [ {products}, dispatch] = useCallReducer(initialState, productsReducer);

    const validateForm = document.querySelectorAll(".form_inputs")

    const { isAlert, alertType, alertMsg, displaySignal } = useSignal()

    const addProduct = async (form) => {
        dispatch({
            type: "ADD_PRODUCT",
            payload: {
                ...form
            },
            image: prodImage,
        })
    }

    const handleSubmit = (event, form) => {
        event.preventDefault();
        let counter = 0
        validateForm.forEach( el => el.value !== "" ? counter += 1 : counter)

        counter === validateForm.length 
            && addProduct(form)
                .then(() => displaySignal("Product Added Successfully", "success", "/admin/products"))
                .catch(() => displaySignal("Error Adding Product", "failure"))
    }
    return (
    <Form 
        handleSubmit={handleSubmit} formInitialValues={initialValues} 
        variant={"form_row"} icon={<AddRounded/>}
        btnText={"Submit Details"} btnType={"submit"} btnVariant={"primary"} btnPosition={"end"}
    >
    { isAlert && <SignalMessage status={isAlert} type={alertType} message={alertMsg} />}
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
                label="Stock Quantity" 
                name="quantity" 
                size={"half"} 
                placeholder={"30"} 
                type={"number"} 
                variant={"column covered secondary"}
                />
                <FormInput 
                label="Stock Status" 
                name="status" 
                size={"half"} 
                placeholder={"In stock"} 
                type={"text"} 
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