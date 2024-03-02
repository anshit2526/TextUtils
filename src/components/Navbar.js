import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id='navbar'>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">{props.aboutText}</Link>
                        </li>

                    </ul>

                    {/* Dark Mode Switch */}
                    <div className={`form-check mx-2 form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input onClick={props.toggleDarkMode} className="form-check-input" type="checkbox" role="switch" id="Dark-Mode" />
                        <label className="form-check-label" htmlFor="Dark-Mode">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Which type of these props should be
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Default props in case you didn't gave any prop or forgot about them
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About text here"
}