import React from 'react';
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,Badge
} from 'reactstrap';

export default class CartItem extends React.Component {
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
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    YourCart - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>remove</Badge> - {cartItem.product.productName} - <Badge color="success">{cartItem.quantity}</Badge>
                            </DropdownItem>
                            

                        ))
                    }
                    <DropdownItem divider/>
                    <DropdownItem>
                        <Link to={"cart"}>Go to Cart</Link>
                    </DropdownItem>

                </DropdownMenu>
            </UncontrolledDropdown>

        )

    }
    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>Empty Your Cart</NavLink>
            </NavItem>
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
            </div>
        )
    }
}

