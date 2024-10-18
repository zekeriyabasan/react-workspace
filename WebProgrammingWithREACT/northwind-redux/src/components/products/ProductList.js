import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import { bindActionCreators } from 'redux'
import { Table, Button } from 'reactstrap';
import alertify from 'alertifyjs'

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addProductToCart = (product) => {
    this.props.actions.addToCart({quantity:1, product});
    alertify.success(product.productName + "sepete eklendi");

  }
  render() {
    return (
      <div><h2><Badge color='success'>Products</Badge></h2>
        <h6><Badge>{this.props.currentCategory.categoryName}</Badge></h6>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick = {()=>this.addProductToCart(product)} color="info">Add</Button></td>
              </tr>
            ))}

          </tbody>
        </Table>
      </div>
    )
  }
}
// this fuction for reducer state connect
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}
// connect action to props
function mapDispatchToProps(dispatch) {

  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);