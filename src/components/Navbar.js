import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="/">Newz</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* // eslint-disable-line */}
                            <li className="nav-item"><Link className="nav-link active" to="/">General</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
                {/* <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Country</button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" type="button">India</button></li>
                        <li><button className="dropdown-item" type="button">USA</button></li>
                        <li><button className="dropdown-item" type="button">Australia</button></li>
                    </ul>
                </div> */}
            </nav>
        </>
    )

}

export default NavBar
