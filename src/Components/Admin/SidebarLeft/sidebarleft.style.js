import styled from "styled-components";

export const SidebarCard = styled.section`
    width: 17.5%;
    height: 100%;
    background-color: #f5f5f5;
    position: fixed;

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
    height: 54px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0px 30px 0 26px;
    border-color: transparent;
    border-radius: 0px 12px 12px 0px;
    transition:all 0.3s ease-in-out;
    :hover{
        border-left: 4px solid #80458D;
        cursor: pointer;
        svg,p {
            color : #80458D;
        }
    }
    svg {
        color : #000;
        margin-right:10px;
        font-size: 1.6rem;
    }
    p{
        color : #000;
        font-size: 16px;
        font-weight: 900;
    }
    &.dash_selected {
        border-left: 4px solid #f3d9d5;
        p, svg{
            color: #f3d9d5;
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