import React from 'react'
import styled from 'styled-components';

const ValueTagStyle = styled.span`
    height: 1rem;
    width: 2rem;
    background-color: rgb(255, 255, 255, 0.3);
    border-radius: 1rem;
    margin-left: 0.5rem;
    font-size: small;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function ValueTag({value}) {

    return (
    <ValueTagStyle>{value}</ValueTagStyle>
    );
};
