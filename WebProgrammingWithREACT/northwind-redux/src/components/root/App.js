import Dashboard from './Dashboard';
import Navi from '../navi/Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container>
      <Navi />
      <Dashboard />


    </Container>
  );
}

export default App;
