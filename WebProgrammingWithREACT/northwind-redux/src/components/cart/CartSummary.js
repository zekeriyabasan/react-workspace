import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge

} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CartSummary extends Component {
    renderWhenEmptyCart() {
        return (
            <Badge>Sepetiniz Boş</Badge>
        )
    }
    renderCartSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map(cartItem => (
                        <DropdownItem>{cartItem.product.productName}
                            <Badge>{cartItem.quantity}</Badge>
                            <Badge onClick={()=>this.props.actions.removeFromCart(cartItem.product)} color='danger'> -</Badge>
                        </DropdownItem>
                    ))}


                    <DropdownItem divider />
                    <DropdownItem>Temizle</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderCartSummary() : this.renderWhenEmptyCart()}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);