import React, { useState } from 'react'
import styled from "styled-components";
import { ReactComponent as LogoSvg } from '../../../assets/images/lips.svg';

export const AuthWrapperStyle = styled.div`
    width: 100%;
    min-height: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 20px 100px 20px;
    background-color: #f4f4f4;
`;

export const LogoStyle = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.image_logo {
        height: auto;
    }
    &.word_logo {
        height: 100px;
    }

    svg { 
        width: 100%;
        height: 160px;
    }
`;

export const AuthStyle = styled.div`
    width: 500px;
    height: auto;
    /* height: 400px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f4f4f4;
    box-shadow: 3px 11px 60px 1px rgba(14,36,83,0.2);
    border-radius: 12px;

    .brand_logo{
        width: 100%;
        height: 72px;
        img { 
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .MuiDivider-root {
        width: 100%;
        margin: 8px 0;
        ::before, ::after {
            top: 0;
            border-top: 0.5px solid rgba(14, 36, 83, 0.8);
        }
        *{ color: rgba(14, 36, 83, 1);}
    }

    .auth_footer{
        width: 100%;
        height: 20px;
        margin: -10px 1px 0px 1px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;  
         *{ color: rgba(14, 36, 83, 1); font-size:12px;}     
         a { 
        display: flex;
        align-items: center;
        transition: all 0.3s ease-in-out;
            svg { margin-left: 4px;}
            :hover { 
                transform: scale(1.02);
            }
         }
    }
`;

export default function AuthWrapper({content}) {

    return (
    <AuthWrapperStyle>
        <LogoStyle className="image_logo"><LogoSvg/></LogoStyle>
        <AuthStyle>
        <div className="brand_logo">
            <img src="./images/brand2.png" alt="Shades of Ruth" />
        </div>        
        {content}
        </AuthStyle>
    </AuthWrapperStyle>
    )
}
