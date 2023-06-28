import React from 'react'
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link className="nav-link active" to="/">General</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
                    </ul>
                    <p className="text-center text-muted">© 2023 Team BB, MRU</p>
                </footer>
            </div>
        </>
    )
}
