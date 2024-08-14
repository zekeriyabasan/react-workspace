import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CartList from "./CartList";
import NotFound from "./NotFound";
import { Container, Row, Col } from 'reactstrap'
import alertify from "alertifyjs"

import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Form1 from "./Form1";
import Form2 from "./Form2";


export default class App extends Component {
  state = { category: {}, products: [], cart: [] }

  addToCart = (product) => {
    let newCart = this.state.cart;
    const existItem = newCart.find(i => i.product.id === product.id);
    if (existItem) {
      existItem.quantity += 1;

    }
    else {
      newCart.push({ product: product, quantity: 1 })
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " Added to Cart", 2)

  }
  removeFromCart = (product) => {
    const newCart = this.state.cart.filter(i => i.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " remove from Cart", 2)
  }

  changeCategory = category => {
    this.setState({ category: category });
    this.getProducts(category.id);

  }
  getProducts = (id) => {
    let urlp = "http://localhost:3000/products";
    if (id) {
      urlp += "?categoryId=" + id
    }
    fetch(urlp)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }
  componentDidMount() {
    this.getProducts();

  }
  titleProduct = 'ÜRÜN LİSTESİ';

  categoryProps = { title: 'KATEGORİ LİSTESİ' }
  render() {
    return (
      <div>

        <Container>
          <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
          <Row>
            <Col xs='3'><CategoryList changeCategory={this.changeCategory} id={this.state.category.id} categoryProp={this.categoryProps} /></Col>
            <Col xs='9'>
              <Routes>
                <Route exact path="/" element={
                  <ProductList
                    addToCart={this.addToCart}
                    category={this.state.category}
                    products={this.state.products}
                    titleProp={this.titleProduct}
                  />
                } />

                <Route path="/cart" element={
                  <CartList
                    removeFromCart={this.removeFromCart}
                    cart={this.state.cart}
                  />
                } />
                <Route path="/form1" element={
                  <Form1 />
                } />
                <Route path="/form2" element={
                  <Form2 />
                } />
                <Route path="*" element={<NotFound />} /> {/* '*' yolu ile 404 sayfasını belirliyoruz */}
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

