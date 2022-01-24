import React,{Component} from "react";

import {element} from "prop-types";

const Navbar=({children})=>(
    <div className="navbar">
        {children}
    </div>
);
export default Navbar;