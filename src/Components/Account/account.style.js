import styled from 'styled-components';

export const SectionWrapper = styled.div`
    height: 100%;
    width: 100%;
    padding: 1rem 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(18, 53, 91, 0.1);
    /* box-shadow: 3px 11px 61px 1px rgba(14,36,83,0.75);   */
    display: flex;  
    &.column {
        flex-direction: column;
    }
  /* CSS VARIABLES */
    --admin-bg-color:  rgba(14, 36, 83, 1);
    --admin-color: #f4f4f4;
    --admin-box-shadow: 3px 11px 61px 1px rgba(14,36,83,0.75);
    --admin-bg-translucent: rgba(255, 255, 255, 0.1);

    --customer-bg-color: #f3d9d5;
    --customer-color: #341d17;
    /* --customer-bg-translucent: ; */
    --customer-box-shadow: 0 5px 5px 1px rgba(160, 54, 54, 0.1);
    &.customer {
        background-color: --customer-bg-color;
        color: --customer-color;
        box-shadow: --customer-box-shadow;
    }
    &.admin {
        background-color: --admin-bg-color;
        color: --admin-color;
        box-shadow: --admin-box-shadow;
    }
`;

export const SidebarStyle = styled.div`
    height: 100%;
    width: 25%;
    padding: 0;
    justify-content: flex-start;
    border-right: 2px solid rgba(255, 255, 255, 0.9);
    .profile_photo_div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 45%;
        width: 100%;
        padding-top: 7.5%;
    }
    .profile_photo_div * {
        margin-bottom: 20px;
    }
    .profile_photo_div .form_inputs {
        padding: 10px;
        border-radius: 8px;
        outline: none;
        border: none;
    }
    .sidebar_bottom {
        width: 100%; 
        margin: 1rem 0;   
        .sidebar_parts {
            display: flex;
            padding: 0.5rem;
            margin: 0.5rem 0.5rem 0.5rem 0;
            align-items: center;
            border-radius: 1rem;
            transition: all 0.3s ease-in-out;
            svg { margin-right: 0.5rem;}
            &.active, :hover {
                cursor: pointer;
                /* background-color: rgba(255, 255, 255, 0.1); */
                background-color: rgba(255, 255, 255, 0.9);

            }
            &.secondary {
               background:  #341d17;
               color: #f4f4f4;
               :hover {
                transform: scale(1.01);
               }
            }

        }
    }
`;


export const AccountModuleStyle = styled.div`
    height: 100%;
    width: 70%;
    padding: 0 5% 20px 5%;
    
`;