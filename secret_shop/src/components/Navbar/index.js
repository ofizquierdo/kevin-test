import React from "react";
import { Nav, NavLink } from "./NavbarElements";

function Navbar(props) {
  return (
    <>
      <Nav>
        {" "}
        <NavLink
          to="secret_shop"
          smooth={true}
          duration={800}
          spy={true}
          exact="true"
        >
          {" "}
          Secret Shop Maketplace{" "}
        </NavLink>
      </Nav>
    </>
  );
}

export default Navbar;
