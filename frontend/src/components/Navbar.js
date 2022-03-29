import React, { Component } from "react"
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
      <>
        <div>
            <li>
                <Link to="/portfolio">My Portfolio</Link>
            </li>
            <li>
                <Link to="/catch-pokemon">Catch Pokemon</Link>
            </li>
            <li>
                <Link to="/login">Logout</Link>
            </li>
        </div>

      </>
    );
  };
    
  export default Navbar;