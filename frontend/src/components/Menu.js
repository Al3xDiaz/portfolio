import './colors.css'
import './Utils.css'
import './fonts.css'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="margin-1">
      <Navbar className="Primary" light expand="md">
        <NavbarBrand className="text-white" href="/">Alex Diaz</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text-white" href="https://github.com/Al3xDiaz?tab=repositories">Repositorios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-white" href="/Courses">Cursos</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
//<NavItem>
//  <NavLink href="/components/">Components</NavLink>
//</NavItem>