import React,{Component} from "react";

import './dropdown.css';

const Sidebar=(props)=>(
    <div className="sidebar" style={{height:"500px"}}>
        <div className="container-fluid h-100">
            <div className="row h-100">
                <aside className="col-12 col-md-2 p-0 bg-light">
                    <nav className="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start">
                        <div className="collapse navbar-collapse">
                            <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-edit" style={{paddingLeft:'10px'}}>Saisie</i>
                                    </a>
                                    <div className="dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <div className="dropdown-divider" style={{marginLeft:"15px"}}>Saisie des comptes</div>
                                        <a className="dropdown-item" href="#">Compte</a>
                                        <div className="dropdown-divider" style={{marginLeft:"10px"}}>Saisie des comptes divionnaires</div>
                                        <a className="dropdown-item" href="#">Comptes divisionnaires</a>
                                        <div className="dropdown-divider" style={{marginLeft:"10px"}}>Saisie des sous-comptes</div>
                                        <a className="dropdown-item" href="#">Sous-comptes</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Service 1</a>
                                        <a className="dropdown-item" href="#">Autre service action</a>
                                        <a className="dropdown-item" href="#">Dernier service</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Service 1</a>
                                        <a className="dropdown-item" href="#">Autre service action</a>
                                        <a className="dropdown-item" href="#">Dernier service</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </aside>
                <main className="col">
                </main>
            </div>
        </div>
    </div>
);
export default Sidebar;