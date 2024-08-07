import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import {Container,Row,Col} from 'reactstrap'

function App() {
  const titleProduct = 'ÜRÜN LİSTESİ';

  const categoryProps = {title : 'KATEGORİ LİSTESİ',
    categories : ["BIÇAK","BEYAZ EŞYA","BİSİKLET"]

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
