import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

export default function Error() {
    return (
        <div className="error_page">
            <div className="error_message">
                <h1 className="error_text">Oops! Page Not Found</h1>
                <p className="error_text">ⓘ The page you are looking for cannot be found</p>
                <Link to="/">
                    <button className="btns error_btn">Go to Home Page</button>
                </Link>
            </div>
        </div>
    )
}
