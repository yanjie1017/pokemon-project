import React, { Component } from "react"
import { Link } from "react-router-dom";

class Navbar extends Component {
    render () {
        return (
            <div className="navbar">
                <div className="left">
                    <p>Pokemon</p>
                    <Link to={`/portfolio/${this.props.id}`} className="link">My Portfolio</Link>
                    <Link to={`/catch-pokemon/${this.props.id}`} className="link">Catch Pokemon</Link>
                </div>
                <div className="right">
                    <span>{this.props.username}</span>
                    <Link to="/login" className="link">Logout</Link>
                </div>
            </div>
        
        );
    }
};
    
export default Navbar;