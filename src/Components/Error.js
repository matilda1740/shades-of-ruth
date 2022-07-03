import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
import { NavigateBeforeRounded } from '@material-ui/icons';

export default function Error() {
    return (
        <div className="error_page">
            <div className="error_message">
                {/* <h1>404</h1> */}
                <img src="/images/error_nobg.png" alt="404" srcset=""/>
                <h2 className="error_text">Oops! Page Not Found</h2>
                <p className="error_text">ⓘ The page you are looking for cannot be found</p>

                <Link to="/" className="error_btn btns">
                    <NavigateBeforeRounded />
                    <button>Home Page</button>
                </Link>
            </div>
        </div>
    )
}
