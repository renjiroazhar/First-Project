import React from 'react';
import './Navbar.css';
import { Button } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

export default class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar-expand-md navbar-collapse navbar-collapse" color="light" light expand="md">
        <NavbarBrand>
        <img height="50px" src="http://i63.tinypic.com/oid9xu.png" alt="props"></img>
        </NavbarBrand>
          <NavbarBrand href="../page/Beranda"> Santren Koding</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Beranda</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Kajian">Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Kilat">Santren Kilat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Mondok">Mondok</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Tentang">Tentang Kami</NavLink>
              </NavItem>
              <NavItem>
              <Button className="btn-outline-primary btn a" color="success">Log in/ SIgn up</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}