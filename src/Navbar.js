import React from "react";
import './index.css';
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"> <img src={require('./images/healthcare (1).png')}  /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Services">SERVICES</NavLink>
        </li>
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/Doctors">DOCTORS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Book">BOOK</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Reviews"> REVIEWS</NavLink>
        </li>
        
       </ul>


    </div>
  </div>
</nav>


        
        </>
    );
};


export default Navbar;