import React, {useState, useRef, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { FormContext } from '../Form';

const FormStyleInput = styled.div`
    /* Common Style fo Full and Half */
    font-weight: 300;
    margin: 10px 0 15px 0;
    label {
        color: rgba(18, 53, 91, 0.5);
        margin-bottom: 5px;
    }
    input {
        outline: none;
        border-bottom: 1px solid rgba(18, 53, 91, 0.2);
        border-top: none;
        border-left: none;
        border-right: none;   
        font-weight: 500;
        background: transparent;
        ::placeholder{
            font-weight: 500;
            color: rgba(18, 53, 91, 0.9);
        }    
    }

    &.full {
        width: 100%;
        label, input {
            width: 100%;
        }
    }
    &.half {
        width: 50%;
        display: flex;
        flex-direction: column;
        label,input {
        width: 99%;
        }
    }
    &.focus {
        label { 
            color: #80458D;
        }
        input { 
        border: 1px solid #80458D !important;
        }
        *{
            font-weight: 300;
            color: #80458D;
          ::placeholder{
            font-weight: 500;
            color: #80458D;
        }    
        }

        input { font-weight: 500; }
    }

    &.row {
        display: flex;
        flex-direction: row;
        align-items: center;
        label,input {
            height: 100%;
        }
        label {
        display: flex;
        align-items: center;    
        }
    }
    &.column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        label {
            margin-bottom:8px;
        }
    }
    &.covered{

        input{ 
        padding: 10px;
        border: 1px solid rgba(18, 53, 91, 0.2) ;
        border-radius: 8px;
        margin-right: 8px;
        overflow-x: scroll;
        :webkit-scrollbar{ display: none; }
        }
    }
`;

const FormInput = (props) => {

    const {label, size, name, type='text', placeholder, variant} = props;

    const ref = useRef();
    const [hasFocus, setFocus] = useState(false);

    const formContext = useContext(FormContext);
    const { form, handleFormChange } = formContext;

    useEffect(() => {
        if (document.hasFocus() && ref.current.contains(document.activeElement)) {
            setFocus(true);
        }
    }, []);
    return (
        <FormStyleInput className={hasFocus ? `focus ${size} ${variant}` : `${size} ${variant}`}>
            <label>{label}</label>
            <input 
                type={type}
                placeholder={placeholder}
                name={name}
                value={form[name] || ""} 
                ref={ref}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={handleFormChange}
            />
        </FormStyleInput>
    );
}
export default FormInput