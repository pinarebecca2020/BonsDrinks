import React from 'react';
import { 
  Nav, 
  NavLink, 
  Bars, 
  NavMenu, 
  NavBtnLink, 
  NavBtn
} from './NavBarElements';


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Sknird</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
          About
          </NavLink>
          <NavLink to="/contact" activeStyle>
          Contact
          </NavLink>
          <NavLink to="/ourteam" activeStyle>
          Our Team
          </NavLink>
          <NavLink to="/populardrinks" activeStyle>
          Popular Drinks
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Search Drink</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar
