import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import './ErrorPage.css';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='error-container'>
            <div className='error'>
                <img className='error-icon' src="/images/error-icon.svg" alt="" />
                <h2 className=''>
                    <span className=''>Error</span> {status || 404}
                </h2>
                <p className=''>
                    {error?.message}
                </p>
                <Link to='/' className='error-btn'>
                    Back to homepage
                </Link>
            </div>
        </section>
    )
}

export default ErrorPage
