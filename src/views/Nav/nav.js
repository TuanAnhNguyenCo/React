import React from "react";
import '../Nav/nav.scss'
import {
    NavLink
} from "react-router-dom";

class Nav extends React.Component {
    render() {
        return (
            <ul>
                <li><NavLink to="/" exact="true" >Home</NavLink></li>
                <li><NavLink to="/add-job">Add Job</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/users">User Info</NavLink></li>
                <li><NavLink to="/product">Product</NavLink></li>
            </ul>
        )
    }

}
export default Nav