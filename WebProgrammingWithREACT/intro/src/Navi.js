import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';

export default class Navi extends React.Component {
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Zeko App</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/form1">FORM - 1</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/form2">FORM - 2</Link></NavLink>
              </NavItem>
              <CartItem cart={this.props.cart} removeFromCart={this.props.removeFromCart} />

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}