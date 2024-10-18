import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import {Link} from 'react-router-dom'
import alertify from 'alertifyjs'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge

} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CartSummary extends Component {
    removeFromCart = (cartItem) => {
        this.props.actions.removeFromCart(cartItem.product);
        alertify.success(cartItem.product.productName + "sepetten çıkarıldı");
    
      }

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
                            <Badge onClick={()=>this.removeFromCart(cartItem)} color='danger'> -</Badge>
                        </DropdownItem>
                    ))}


                    <DropdownItem divider />
                    <DropdownItem><Link to={"/cart"}>Sepete Git</Link></DropdownItem>
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