import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import {Container,Row,Col} from 'reactstrap'

function App() {
  const titleProduct = 'ÜRÜN LİSTESİ';

  const categoryProps = {title : 'KATEGORİ LİSTESİ',
    categories : [
      {Id:1, name:"BIÇAK"},
      {Id:2, name:"BEYAZ EŞYA"},
      {Id:3, name:"BİSİKLET"}]

  }

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs='3'><CategoryList categoryProp ={categoryProps}/></Col>
          <Col xs='3'><ProductList titleProp ={titleProduct} /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
