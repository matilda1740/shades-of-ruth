import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

export const AccordionWrapper = styled.div`

    & .MuiPaper-root, & .MuiPaper-root.MuiPaper-root {
        background-color:transparent;
        width: calc(100% - 32px);
        margin: 4px 16px;
        box-shadow: none;
        ::before{background-color:transparent;}
    }
    & .MuiAccordionSummary-root{
        height: 48px;
        width: 100%;
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
        /* margin: 4px 16px; */
        margin: 0;

    }

    &.secondary_acc_style {
        text-transform:capitalize;
        .MuiPaper-root {
                background-color: rgba(232, 240, 254, 1);
                border-radius: 0.75rem;
                ::before{background-color: rgba(232, 240, 254, 1);}
        }
        .MuiAccordionSummary-expandIconWrapper, .MuiAccordionSummary-expandIconWrapper.Mui-expanded{
            margin-left: 1rem;
        } 
    & .MuiAccordionSummary-root.Mui-expanded{
        width: calc(100% - 0px);
        margin: 0;
        height: fit-content;
    }      
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
        <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
}