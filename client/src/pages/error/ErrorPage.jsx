import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div id='errorPage' className='userSelectNone'>
            <h1>404</h1>
            <h2>Page not found.</h2>
            <p>The page you are looking was not found/moved permanently.</p>
            <Link to={'/'}>Back to Home</Link>
        </div>
    )
}

export default ErrorPage