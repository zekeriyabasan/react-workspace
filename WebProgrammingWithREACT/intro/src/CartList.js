import React, { Component } from 'react'
import { Table,Button } from 'reactstrap'


export default class CartList extends Component {
  renderCart() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>UnitPrice</th>
            <th>UnitsInStock</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id}>
                <td>{cartItem.product.id}</td>
                <td>{cartItem.product.categoryId}</td>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.product.unitsInStock}</td>
                <td>{cartItem.quantity}</td>
                <td><Button onClick={()=>this.props.removeFromCart(cartItem.product)} color="danger">remove</Button></td>
              </tr>
            ))
          }
          
        </tbody>
      </Table>

    )
  }
  render() {
    return (
      <div>{this.renderCart()}</div>
    )
  }
}
