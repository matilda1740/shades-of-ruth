import React, { useState } from 'react'
import Form, { FormContext } from '../../../ReusableComponents/Form.js'
import FormInput from '../../../ReusableComponents/FormInput'
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
