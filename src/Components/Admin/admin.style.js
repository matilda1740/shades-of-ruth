import styled from "styled-components";

export const AdminWrapper = styled.section`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
`;

export const ModuleSection = styled.section`
    display:flex;
    flex-direction: column; 
    background-color: #ffffff;
    padding:40px 30px;
    /* width: 75%; */
    width: 82.5%;
    margin-left: 17.5%;
    border-right: 4px solid #F3F5F7;
     @media screen and (max-width: 480px) {
         width: 100%;
     }
    `;