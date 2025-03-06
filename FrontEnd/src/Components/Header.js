import React from "react";
import { NavLink } from "react-router-dom";



function Header() {

  return (
    <div className="header">
      <h1 className="heading">ｓℕα𝔃𝔃𝕐</h1>
      <div className="menu">
      <nav className="nav-links">
        <NavLink to="/" >Home</NavLink>
        <NavLink to='/services' > Services </NavLink>
        <NavLink to='/product' > product </NavLink>
        <NavLink to="/post" >Post</NavLink>
        {/* <NavLink to="/contact" >Contact</NavLink> */}
        {/* <NavLink to="/profile" >Profile</NavLink> */}
        <NavLink to="/login" >Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </nav>
      </div>
    </div>
  );
}

export default Header;