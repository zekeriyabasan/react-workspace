import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.titleProp}-{this.props.currentCategoryId}</h3>
      </div>
    )
  }
}
