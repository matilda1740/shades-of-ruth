import styled from "styled-components";

export const AdminWrapper = styled.section`
    width: 100%;
    height: 1000px;
    display:flex;
    flex-direction: row;
    padding: 40px;
    background-color: rgba(14, 36, 83, 0.98);
`;

export const ModuleSection = styled.section`
    display:flex;
    flex-direction: column; 
    background-color: transparent;
    /* padding:40px 30px; */
    /* width: 75%; */
    width: 80%;
    margin: 0 0px 0 20%;
    padding-right: 10px;
    border-right: 4px solid #F3F5F7;
     @media screen and (max-width: 480px) {
         width: 100%;
     }
    `;