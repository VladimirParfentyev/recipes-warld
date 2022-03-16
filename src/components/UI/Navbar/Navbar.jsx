import React, {useContext} from 'react';
import {Link} from "react-router-dom";

const Navbars = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">Meal</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">О сайте</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipes">Рецепты</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/posts">Посты</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbars;
