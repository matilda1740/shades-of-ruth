import { ErrorOutlineOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from "styled-components";

const ErrorStyle = styled.div`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    margin: 8px 0;
    svg {
        margin:0 4px;
    }
    &.invalid {
        background-color: rgba(231, 24, 27, 0.2);
        * {
            color: rgba(231, 24, 27, 1);
        }
    }
`;

export default function ErrorMessage({status, message}) {

    return (
        <ErrorStyle className={status}>
            <ErrorOutlineOutlined />
            <p>{message}</p>
        </ErrorStyle>
    )
}
