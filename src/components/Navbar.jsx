import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Rakshi <span className='text-danger'>Pasal</span></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <Link to={'/Login'} className="btn btn-success" type="submit">Login</Link>
                                <Link to={'/Register'} className="btn btn-primary ms-2" type="submit">register</Link>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar
