import React from 'react'
import { Link } from 'react-router-dom'

export function ErrorPage() {
    return (
        <React.Fragment>
            <h1>Error Page</h1>
            <p>404 Not Found</p>

            <Link to="/">Go back to Home Page</Link>
        </React.Fragment>
    )
}
