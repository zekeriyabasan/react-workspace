import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import alertify from 'alertifyjs'
import { Badge } from 'reactstrap'
import { Table, Button } from 'reactstrap';
class CartDetail extends Component {
  removeFromCart = (cartItem) => {
    this.props.actions.removeFromCart(cartItem.product);
    alertify.success(cartItem.product.productName + "sepetten çıkarıldı");

  }
  render() {
    return (
      <div><div><h2><Badge color='success'>Cart Detail</Badge></h2>
        <Table info>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (
              <tr>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td><Button onClick={() => this.removeFromCart(cartItem)} color="danger">sil</Button></td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
