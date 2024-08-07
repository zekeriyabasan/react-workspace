import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import {Container,Row,Col} from 'reactstrap'

import React, { Component } from 'react'

export default class App extends Component {
  state = {category:{},products:[]}

  changeCategory = category => {
    this.setState({category:category});
    this.getProducts(category.id);

}
getProducts = (id)=>{
  let urlp = "http://localhost:3000/products";
  if(id){
    urlp += "?categoryId=" + id
  }
  fetch(urlp)
  .then(response=>response.json())
  .then(data=>this.setState({products:data}))
}
componentDidMount(){
  this.getProducts();

}
  titleProduct = 'ÜRÜN LİSTESİ';

  categoryProps = {title : 'KATEGORİ LİSTESİ'}
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs='3'><CategoryList changeCategory={this.changeCategory} id={this.state.category.id}  categoryProp ={this.categoryProps}/></Col>
            <Col xs='9'><ProductList category={this.state.category} products={this.state.products} titleProp ={this.titleProduct} /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

