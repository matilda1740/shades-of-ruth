import React from 'react'
import { useNavigate } from 'react-router';
import styled from "styled-components";
import Button from '../Button';
import { AddRounded } from '@mui/icons-material';
import Breadcrumbs from '../Breadcrumbs';

const SectionHeadingStyle = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 24px 0;
    .description{
        height: 100%;
        width: 100%;
        padding: 12px 4px;
        h3 {
            color: #f4f4f4;
            font-weight: 900;
            font-size: 24px;
        }
    }
`;

export default function SectionHeading({title, addText, pushLink, type, btnHidden, isReveal, handleReveal}) {

    const navigate = useNavigate();

    return (
        <SectionHeadingStyle>
            <div className="description">
                <h3>{title}</h3>
                <Breadcrumbs  type={type} />
            </div>
            {
                !btnHidden &&
                <Button
                    icon={<AddRounded/>}
                    text={addText}
                    variant={"primary"}
                    handleClick={isReveal ? handleReveal : () => navigate(pushLink)}
                />                
            }

        </SectionHeadingStyle>
    )
}
