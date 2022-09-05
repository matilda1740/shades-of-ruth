import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    padding: 10px 0px;
    border: none;
    outline: none;
    transition: all 0.3s ease-in-out; 
    min-width: 160px;
    min-height: 30px;
    margin: 12px 1px;

    :hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    svg { 
        margin: 0 8px;
        font-weight: 500;
        width: 16px; height: 16px;
    }
    &.primary_btn {
        width: fit-content;
        height: fit-content;
        color: #f4f4f4;
        background-color: #530E24;   
        border-radius: 8px;
        
    }
    &.secondary_btn, &.outlined_btn, &.nobg_btn{
        width: 100%;
        height: fit-content;
        border-radius: 8px;
    }
    &.secondary_btn {
        color: #f4f4f4;
        background-color: rgba(14, 36, 83, 1);  
    }
    &.outlined_btn {
        background-color: transparent;  
        color: rgba(14, 36, 83, 1);
        border: 0.5px solid rgba(14, 36, 83, 0.8);
    }
    &.nobg_btn {
        background-color: transparent;  
        border: none;
        color: rgba(14, 36, 83, 1);
        margin: 4px 1px;
        padding: 5px 0px;
        font-weight: bold;
    }

    /* BUTTON POSITIONS */
    &.beginning {
        margin-right: auto;
    }
    &.end {
        margin-left: auto;
    }
    &.center {
    }

    @media screen and (max-width: 480px) {
        /* &.regular_btn {
            height: 80px !important;
        } */
    }
`;

const Button = (props) => {

    const { variant, text, type="button", position, icon, handleClick} = props;

    return (
        <ButtonStyle onClick={handleClick} className={`${variant}_btn ${position}`}>{icon}{text}</ButtonStyle>
    );
}
export default Button;