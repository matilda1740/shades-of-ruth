import React from 'react';
import styled from 'styled-components';

import SectionHeading from '../../ReusableComponents/SectionHeading/index.js';
import { ModuleStyle } from '../ViewPages/Products';

export const UpdateFormStyle = styled.div`
    min-width: 400px;
    min-height: 200px;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;

    padding: 40px 20px;
    
    background-color: rgba(14, 36, 83, 1);
    box-shadow: 3px 11px 61px 1px rgba(14,36,83,0.75);
    border-radius: 12px;

`;

export default function UpdateForms({title, type, btnHidden, content}) {

  return (
    <ModuleStyle>
        <SectionHeading
            title={title}
            btnHidden={btnHidden}
            type={type}
        /> 
        <UpdateFormStyle>{content}</UpdateFormStyle>
    </ModuleStyle>

  )
}