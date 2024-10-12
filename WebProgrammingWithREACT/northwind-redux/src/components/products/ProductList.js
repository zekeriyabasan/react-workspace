import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Badge} from 'reactstrap'
class ProductList extends Component {
  render() {
    return (
      <div><h2><Badge color='success'>Products</Badge></h2>
      <h6><Badge>{this.props.currentCategory.categoryName}</Badge></h6>
      
      </div>
    )
  }
}
// this fuction for reducer state connect
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  }
}
export default connect(mapStateToProps)(ProductList);