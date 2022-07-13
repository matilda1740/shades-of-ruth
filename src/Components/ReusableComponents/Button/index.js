import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    padding: 5px 10px;
    border-radius: 25px;
    border: none;
    outline: none;
    transition: all 0.3s ease-in-out; 

    :hover {
        cursor: pointer;
        transform: scale(1.02);
    }

    svg { 
        margin: 0 8px;
        font-weight: 500;
    }
    &.primary_btn {
        width: fit-content;
        height: fit-content;
        min-width: 200px;
        min-height: 30px;
        margin: 12px 20px 12px 40px;
        color: #f3d9d5;
        background-color: #341d17;    
    }

    /* BUTTON POSITIONS */
    &.beginning {
        align-self: flex-start;
    }
    &.end {
        align-self: flex-end;
    }
    &.center {
        align-self: center ;
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