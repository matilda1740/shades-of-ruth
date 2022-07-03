import styled from "styled-components";

export const HeaderWrapper = styled.section`
    position: fixed;
    width: 100vw;
    height: 80px;
    background-color: #f3d9d5;
    box-shadow: 0 5px 5px rgba(160, 54, 54, 0.1);
    z-index: 99999;
`;

export const MobileNavWrapper = styled.div`
    justify-content: flex-end;
    align-items: center;
    display: flex;
    width: 50%;
    height: 100%;
    
    @media screen and (min-width: 1200px) {
        display: none !important;
    }
`;