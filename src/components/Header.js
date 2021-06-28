import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1 style={{ fontWeight: "bold", color: "#fff" }}>Movie Catalogue</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Movies List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Movie
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
