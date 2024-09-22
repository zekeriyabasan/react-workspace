import React, { Component } from 'react'
import { connect } from 'react-redux'

 class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Categories</h3>
        <h4>Kategori : {this.props.currentCategory.categoryName}</h4>
        </div>
    )
  }
}

// this fuction for reducer state connect
function mapStateToProps(state){
  return {
    currentCategory: state.changeCategoryReducer
  }
}

export default connect(mapStateToProps)(CategoryList);