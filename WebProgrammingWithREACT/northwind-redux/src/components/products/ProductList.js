import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge } from 'reactstrap'
import * as productActions from '../../redux/actions/productActions'
import { bindActionCreators } from 'redux'
import { Table } from 'reactstrap';

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
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
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>@{product.unitPrice}</td>
                <td>@{product.unitsInStock}</td>
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
      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);