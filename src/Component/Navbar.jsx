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
import { Link } from 'react-router-dom';

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
      <div className="sanlight-body" style={{ borderBottom: '1px solid #e7e7e7' }}>
        <Navbar className="navbar-expand-md navbar-collapse navbar-collapse" color="light" light expand="md">
        <NavbarBrand>
        <img height="50px" src="http://i63.tinypic.com/oid9xu.png" alt="props"></img>
        </NavbarBrand>
          <NavbarBrand tag={Link} to="/"> Santren Koding</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Beranda</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/kajian-koding">Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/santren-kilat">Santren Kilat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/mondok">Mondok</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/tentang-kami">Tentang Kami</NavLink>
              </NavItem>
              <NavItem>
              <Button className="btn-outline-primary btn a" color="success">Log in/ Sign up</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}