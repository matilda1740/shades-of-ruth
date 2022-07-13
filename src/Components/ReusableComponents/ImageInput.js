import React, { useState } from 'react'
import styled from 'styled-components';
// IMAGES AND ICONS
import avatar from '../../common/assets/avatar.png'

// STYLING
const ImageInputStyle = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    margin: 0px 0 10px 0;
    flex-direction: column;
        input {   
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1; 
        }  

        label {
            width: 100%;
    height: 160px;
            img {
                object-fit: contain;
                width: 100%;
                height: 100%;   
            }
            :hover { cursor: pointer; }
        }

    @media screen and (max-width: 480px) {
    }
`;

const ImageInput = ({getImage}) => {

    const [profileImage, setProfileImage] = useState(avatar);

    const loadImage = (event) => {
        const image = document.querySelector("#displayImage");
        if(event.target.files[0] !== undefined){
            image.src = URL.createObjectURL(event.target.files[0]);
            image.style.display = "block"
            setProfileImage(URL.createObjectURL(event.target.files[0]))
            getImage(URL.createObjectURL(event.target.files[0]));
        }else {
            image.src = avatar ;
        }        
    }

    return (
        <ImageInputStyle>
            <label htmlFor="inputImage">
                <img id="displayImage" src={profileImage} alt="Avatar" />
            </label>
            <input onChange={loadImage} type="file" id="inputImage" name="inputImage" accept="image/*" />
        </ImageInputStyle>
    );
}

export default ImageInput;