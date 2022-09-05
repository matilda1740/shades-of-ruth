import React from 'react'
import styled from "styled-components";
import { LogoStyle } from '../../Admin/AuthPages';
import { ReactComponent as LogoSvg } from '../../../assets/images/lips.svg';
import { CircularProgress } from '@mui/material';

const LoaderWrapperStyle = styled.div`
    width: 100%;
    height: 560px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    .MuiCircularProgress-root, .MuiCircularProgress-svg{
        width: 240px !important;
        height: 240px !important;
        color: #f4f4f4;
    }
    .MuiCircularProgress-svg circle {
        stroke-width: 1.6 !important;
    }
    .image_logo { 
        position: absolute;
        svg{ g { fill: #f4f4f4; } }
    }
`;

export default function Loader() {

    return (
        <LoaderWrapperStyle>
            <CircularProgress 
                variant="indeterminate" 
                sx={{animationDuration: '800ms'}}   
            />
            <LogoStyle className="image_logo"><LogoSvg/></LogoStyle>
        </LoaderWrapperStyle>

    )
}
