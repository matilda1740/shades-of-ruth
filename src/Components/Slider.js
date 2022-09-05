import React from 'react'
import './Slider.css'
import { NavigateBeforeRounded, NavigateNextRounded} from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Slider() {

    return (
        <div className="slider">
            <div className="slider_left"> 
            <img src="images/home_bg2.png" alt="Banner Model"/>
            </div>
            <div className="blob">
            <svg viewBox="-40 -40 150 150" xmlns="http://www.w3.org/2000/svg">
                <path fill="#F3D9D5" d="M53.2,-53C68,-38.5,78.2,-19.2,79.9,1.7C81.7,22.7,74.9,45.4,60.2,53.5C45.4,61.6,22.7,55,1.1,53.9C-20.5,52.8,-41,57.2,-55.5,49.1C-69.9,41,-78.2,20.5,-73,5.2C-67.8,-10.1,-49,-20.1,-34.5,-34.6C-20.1,-49.1,-10.1,-68,4.6,-72.6C19.2,-77.2,38.5,-67.5,53.2,-53Z" transform="translate(50 50)" />
            </svg>
            </div>

            <div className="slider_right">
            <h2>Featured New Collection Of Eye-Shadows</h2>
            <p>Our eyeshadow palette is inspired by the colours of Earth, with beginner makeup enthusiasts in mind. Check out our Taurus collection.</p>
            <Link to="/eye-shadows">
            <button className="btns slider_btn">View Collection</button>
            </Link>

            </div>
        </div>
    )
}
