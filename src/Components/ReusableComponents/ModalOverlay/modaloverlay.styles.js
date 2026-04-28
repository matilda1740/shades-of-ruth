import styled from 'styled-components';

export const ModalWrapperOverlay = styled.section`
    background: rgba(0, 0, 0, 0.25);
    width: calc(100% + 60px);
    height: 1000px;
    display:flex;
    justify-content: center;
    margin: -40px -30px; /* To overcome module column padding */
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10
`;

export const ModalWrapperStyle = styled.section`
    background: #FFFFFF;
    border-radius: 32px;
    padding: 20px 20px;
    width: 100%;
    max-width: 650px;
    height: 550px;
    max-height: 650px;
    display: flex; 
    flex-direction: column;
    margin: 12.5% 0 0 0; 
`;
export const DetailsSection = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    background: transparent;
    width: 100%;
    height: 100%;
    /* margin: 20px 0px; */
`;