import React, { useState } from 'react'
import Form, { FormContext } from '../../ReusableComponents/Form/index.js'
import FormInput from '../../ReusableComponents/FormInput'
import styled from "styled-components";
import { PostAddOutlined } from '@material-ui/icons';

export const BranchFormStyle = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    background-color: #f4f4f4;
    box-shadow: 3px 11px 120px 1px rgba(14,36,83,0.75);
    border-radius: 12px;
`;

export default function BranchForm() {
    const [newBranch, setNewBranch] = useState("");

    const initialValues = {
        branchName: ''
    }

    const handleSubmit = (form) => (e) => {
        e.preventDefault();
        setNewBranch(form.branchName)
        console.log(form)
    }

    return (
    <BranchFormStyle>
        <Form 
            handleSubmit={handleSubmit} formInitialValues={initialValues} 
            variant={"form_row"} icon={<PostAddOutlined/>}
            btnText={"Add New Branch"} btnType={"submit"} btnVariant={"primary"}
        >
            <FormContext.Consumer>
                {({form, handleFormChange}) => (
                <>
                    <FormInput 
                    label="Branch Name" 
                    name="branchName" 
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
