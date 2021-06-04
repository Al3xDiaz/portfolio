import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../css/NavMenu.css';
import { Ddl } from '../basico/ddl'

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

    render() {
        const desarrollador = [
            { cmp: "/Comentar", titulo: "Comentarios" },
            { url: "https://github.com/al3xdiaz/portafolio/", titulo: "Documentacion" },
            { titulo: "cuentas", h:true },
            { url: "https://www.linkedin.com/in/al3xdiaz", titulo: "linkedin" },
            { url: "https://github.com/al3xdiaz", titulo: "github" }
        ];
        const componentes = [
            { cmp: "/contador", titulo: "Contador" },
            { cmp: "/usuarios", titulo: "Usuarios" },
            { cmp: "/fetch-data", titulo: "Pronostico" },
            { cmp: "/TablasEjemplo", titulo: "tabla" },
        ];
        const juegos = [
            { cmp: "/EquisCero", titulo: "juego X0" },
            { cmp: "/Parejas", titulo: "Encuentra parejas" },
        ];
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Alex Diaz</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/">inicio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink ><Ddl title="Componentes" links={componentes} /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink ><Ddl title="Juegos" links={juegos} nav caret /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink ><Ddl title="Desarrollador" links={desarrollador} nav caret /></NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
