import React, { Component } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';


class Menu extends Component {


  render = () => {
    return (
        <div className="container h-100">
            <div className="row h-100">
                <aside className="col-12 col-md-2 p-0 bg-dark">
                    <nav className="navbar navbar-expand navbar-dark bg-warning flex-md-column flex-row align-items-start">
                        <div className="collapse navbar-collapse">
                            <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                                <li className="nav-item">
                                    <a className="nav-link pl-0" href="#">Menu 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-0" href="#">Menu 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-0" href="#">Menu 3</a>
                                </li><
                                li className="nav-item">
                                    <a className="nav-link pl-0" href="#">Menu 4</a>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </aside>
                <main className="col">
                    <p>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    </p>
                </main>
            </div>
        </div>
    )
      
           
  }
}

export default Menu;
