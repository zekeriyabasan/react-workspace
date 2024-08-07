import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import {Container,Row,Col} from 'reactstrap'

import React, { Component } from 'react'

export default class App extends Component {
  state = {currentCategoryId:0}

  changeCategory = id => {
    this.setState({currentCategoryId:id})

}

  titleProduct = 'ÜRÜN LİSTESİ';

  categoryProps = {title : 'KATEGORİ LİSTESİ',
    categories : [
      {Id:1, name:"BIÇAK"},
      {Id:2, name:"BEYAZ EŞYA"},
      {Id:3, name:"BİSİKLET"}]

  }
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs='3'><CategoryList changeCategory={this.changeCategory} currentCategoryId={this.state.currentCategoryId} categoryProp ={this.categoryProps}/></Col>
            <Col xs='3'><ProductList currentCategoryId={this.state.currentCategoryId} titleProp ={this.titleProduct} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

