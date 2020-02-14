import React, { Component } from "react";
import "./style.css";
import HamburguesaIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const Navbar = () => {
    return (
        <div className="home">
            <div class="nav-menu">

                <HamburguesaIcon />

            </div>

            <div class="nav-container">
                <div class="nav-header">
                    <span></span>
                    <div class="close-button">
                        CLOSE <CloseIcon />
                    </div>
                </div>
                <ul class="navigation">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li class="dropdown-container">
                        <a href="#">
                            Modelo<span class="caret"></span>
                        </a>

                        <ul class="dropdown-nav">
                            <li>
                                <a href="#">Hoja Ruta</a>
                            </li>
                            <li>
                                <a href="#">Arquitectura</a>
                            </li>
                            <li>
                                <a href="#">Framework</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Capacitación</a>
                    </li>
                    <li>
                        <a href="#">HYPERTECH</a>
                    </li>
                    <li>
                        <a href="#">Aula Virtual</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
