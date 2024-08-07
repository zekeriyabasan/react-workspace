import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import {Container,Row,Col} from 'reactstrap'

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs='3'><CategoryList /></Col>
          <Col xs='3'><ProductList /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
