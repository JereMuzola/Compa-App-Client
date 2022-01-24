import React from 'react';

import './dropdown.css';
import {Link} from 'react-router-dom';

const Header=(props)=>(
        <div style={{marginBottom:'80px'}}>
            <nav className="navbar navbar-expand-xl navbar-light bg-primary fixed-top">
                <Link className="navbar-brand" to="/">{props.titre}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="fa fa-home">
                                Accueil
                                </i>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-edit" style={{paddingLeft:'10px'}}>Plan Comptable</i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <div className="dropdown-divider" style={{marginLeft:"15px",color:"black"}}>Saisie des comptes</div>
                                <Link className="dropdown-item" to="/compte"><i className="fa fa-save">Comptes</i></Link>
                                <div className="dropdown-divider" style={{marginLeft:"10px"}}>Saisie des comptes divionnaires</div>
                                <Link className="dropdown-item" to="/compteDiv"><i className="fa fa-save">Compte divisionnaire</i></Link>
                                <div className="dropdown-divider" style={{marginLeft:"10px"}}>Saisie des sous-comptes</div>
                                <Link className="dropdown-item" to="/sousCompte"><i className="fa fa-save">Sous-comptes</i></Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mouvements
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link className="dropdown-item" to="/mouvement/mutation">Journalisation</Link>
                                <Link className="dropdown-item" to="/mouvement/fetch">Journaux de mouvements</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Service 1</a>
                                <a className="dropdown-item" href="/">Autre service action</a>
                                <a className="dropdown-item" href="/">Dernier service</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
);
export default Header;