import React from 'react';
import CartSummary from '../cart/CartSummary'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

 class Navi extends React.Component {
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
          <NavbarBrand ><Link to={'/'}>Anasayfa</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to={'/cart/'}>Sepet</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><Link to={'/products/'}>Ürünler</Link></NavLink>
              </NavItem>
              <CartSummary/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navi;
