import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import Categorylist from '../categories/CategoryList'
import ProductList from '../products/ProductList'
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <Categorylist />
          </Col>
          <Col xs="9">
            <ProductList />
          </Col>
        </Row>
      </div>
    )
  }
}
