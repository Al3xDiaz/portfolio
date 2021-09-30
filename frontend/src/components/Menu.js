import './colors.css'
import './Utils.css'
import './fonts.css'
import './menu.css'
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { AiFillEye } from "react-icons/ai";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { getViews } from '../Request/views';
export function Menu() {
  const [views, setViews] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggle =() => setIsOpen(!isOpen);
  getViews()
  .then(res=>{
    setViews(res)
  })
  .catch(err=>{
    console.log(err);
    setViews(0)
  })
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
            <NavbarText>
              {views?(<AiFillEye />):(<BsFillEyeSlashFill />)}{views}
              </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Menu;
//<NavItem>
//  <NavLink href="/components/">Components</NavLink>
//</NavItem>