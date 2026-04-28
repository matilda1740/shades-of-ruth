import React, { useState } from 'react'
import Form, { FormContext } from '../../../ReusableComponents/Form/index.js'
import FormInput from '../../../ReusableComponents/FormInput'
import styled from "styled-components";
import { PostAddOutlined } from '@mui/icons-material';
import SignalMessage from '../../../ReusableComponents/SignalMessages/index.js';
import { db } from '../../../../firebase'
import { collection, doc, addDoc, setDoc, Timestamp } from "firebase/firestore"; 
import { useSignal } from '../../../../Hooks/useSignal.js';

export const BranchFormStyle = styled.div`
    margin: -1rem 1rem 2rem 1rem;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    background-color: rgba(232, 240, 254, 1);
    opacity: 1;
    /* transition: all 0.3s ease; */
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    .form_row {
        .full {
            width: 80%;
            margin: 0;
        }
        button{ margin: 0; padding: 7.55px 0; }
    }

    &.not_visible {
        height: 0px;
        margin: 0 1rem;
        opacity: 0;
    }
`;

export default function BranchForm({visibility}) {

    const initialValues = {
        name: ''
    }

    const { isAlert, alertType, alertMsg, displaySignal } = useSignal();

    const handleSubmit = async (event, form) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, "branches"), form)
                .then(response => { 
                    setDoc(doc(db, "branches", response.id), 
                    { 
                        id: response.id, 
                        ...form,
                        createdAt: Timestamp.now(),
                    } , { merge:true })
                }).then(() => displaySignal("Branch Added Successfully!", "success"))
                .catch(error => console.log(error))
        }catch(error) { console.log("error adding branch", error)}

    }

    return (
    <BranchFormStyle className={visibility}>
        <Form 
            handleSubmit={handleSubmit} formInitialValues={initialValues} 
            variant={"form_row"} icon={<PostAddOutlined/>}
            btnText={"Add New Branch"} btnType={"submit"} btnVariant={"primary"}
        >
            { isAlert && <SignalMessage status={isAlert} message={alertMsg} type={alertType} /> }
            <FormContext.Consumer>
                {({form, handleFormChange}) => (
                <>
                    <FormInput 
                    label="Branch Name" 
                    name="name" 
                    size={"full"} 
                    placeholder={"Thika Road"} 
                    type={"text"} 
                    variant={"row covered"}
                    />
                </>
                )}
            </FormContext.Consumer>
        </Form>
    </BranchFormStyle>
    )
}
