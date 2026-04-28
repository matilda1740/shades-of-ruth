import styled from "styled-components";

export const SidebarCard = styled.section`
    width: 19%;
    height: 90%;
    background-color: rgba(14, 36, 83, 1);
    box-shadow: 3px 11px 61px 1px rgba(14,36,83,0.75);
    border-radius: 16px;
    margin-right: 1%;

    * {
        background-color: rgba(14, 36, 83, 1);
        color : #f4f4f4;
    }

    .logo_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60px;
        margin: 20px 0 20px 0;
        img{
            width: 80%;
            height: 100%;
        }
    }
    svg { 
        font-size: 1.25rem;        
    }
    
`;

export const DashboardLinks = styled.a`
    height: 48px;
    width: calc(100% - 32px);
    display: flex;
    align-items: center;
    margin: 4px 16px;
    padding: 0px 16px;
    border-color: transparent;
    border-radius: 12px;
    transition:all 0.3s ease-in-out;
    * {background-color: transparent;}

    :hover{
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.1);
        * {background-color: transparent;}
    }
    svg {
        margin-right:10px;
        font-size: 1.25rem;
    }
    p{
        font-size: 16px;
        font-weight: 900;
    }
    &.dash_selected {
        background-color: rgba(255, 255, 255, 0.1);
        p, svg{
            color: rgba(14, 36, 83, 1);
        }
    }

`;

export const MobileHeader = styled.section`
    @media screen and (max-width: 480px) {
        height: 38px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 38px 18px 0px 18px;
        .ellipse {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 1px solid rgba(88, 50, 218, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 16px;
                height: 16px;
            }
        } 
        &.mobile_header {
            margin: 10px 0px 30px 0;
        }
    } 
    
    @media screen and (min-width: 768px) {
        display: none;
    }
`;