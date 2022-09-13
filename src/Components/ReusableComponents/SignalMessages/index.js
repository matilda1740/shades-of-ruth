import { CancelOutlined, CheckCircleOutlineRounded} from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import styled, { keyframes } from "styled-components";

export const fadeInOut = keyframes`
    0%{
        opacity: 0;
    }
    25%{
        opacity: 1;
    } 
    50%{
        opacity: 1;
    }
    75% {
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;

const SignalStyle = styled.div`
    position: absolute;
    top: 30px;
    right: 20px;
    height: 80px;
    /* width: 300px; */
    width: fit-content;
    border-radius: 8px;
    z-index: 999999;
    background-color: #dcdcdc;
    box-shadow: rgba(0, 0, 0, 1) 30px 30px 90px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px 0 12px;
    color: black;
    transition: all 0.5s ease-in-out;
    animation: ${fadeInOut} 4s linear ;

    svg { font-size: 40px; margin-right: 12px;}
    &.success {
        border-left: 10px solid green;
        svg {
        color: green;
        }
    }
    &.failure {
        border-left: 10px solid #9b111e;
        svg {
        color: #9b111e;
        }
    }
`;



export default function SignalMessage({status, type, message, nextPage}) {
    // const [isAlert, setIsAlert] = useState(false);
    // const navigate = useNavigate();

    // const displaySuccess = () => {
    //     setIsAlert(true)
    //     setTimeout(() => {
    //         setIsAlert(false)
    //         // navigate("/admin")
    //     }, 4000);
    // }

    return (
        <SignalStyle className={type === "success" ? "success" : "failure"} style={{display: status ? `flex`  : `none`}}>
            { 
                type  === "success" ? <CheckCircleOutlineRounded /> : <CancelOutlined />
            }
            <p>{message}</p>
        </SignalStyle>
    )
}
