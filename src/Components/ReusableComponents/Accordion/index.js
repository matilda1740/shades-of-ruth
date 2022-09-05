import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

export const AccordionWrapper = styled.div`

    & .MuiPaper-root {
        background-color:transparent;
        width: calc(100% - 32px);
        margin: 4px 16px;
        box-shadow: none;
        ::before{background-color:transparent;}
    }
    & .MuiAccordionSummary-root{
        height: 48px;
    }
    & .MuiAccordionSummary-content{
        svg{ margin-right: 8px;} 

    }
    & .MuiAccordionDetails-root{
        padding: 4px 8px ;
        /* height: fit-content; */
        a { height: 36px; margin-bottom: 8px;}
    }

    /* EXPANDED */
    & .MuiAccordionSummary-root.Mui-expanded{
        width: calc(100% - 0px);
        margin: 4px 16px;

    }
`;

export default function CustomAccordion({icon, label, children}) {
    return (
        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >{icon}{label}
        </AccordionSummary>
        <AccordionDetails><Typography>{children}</Typography></AccordionDetails>
        </Accordion>
    );
}