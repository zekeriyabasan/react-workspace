import Dashboard from './Dashboard';
import Navi from '../navi/Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import {Route,Routes} from 'react-router-dom'
import ProductList from '../products/ProductList';
import CartDetail from '../cart/CartDetail';
function App() {
  return (
    <Container>
      <Navi />
      <Routes>
        <Route path='/' element = {<Dashboard/>}/>
        <Route path='/cart' element = {<CartDetail/>}/>
        <Route path='/products' element = {<ProductList/>}/>
        

      </Routes>


    </Container>
  );
}

export default App;
