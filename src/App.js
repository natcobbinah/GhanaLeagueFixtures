import {BrowserRouter,Switch,Route} from 'react-router-dom'
import MainDashboard from './components/dashboard'
import Teams from './components/teams/teams'
import AllMatches from './components/matches/allmatches'
import { Container, Jumbotron, Nav,Navbar,NavDropdown,
    Card,CardDeck,CardGroup,CardColumns,ListGroup,Row,Col,Tabs,Tab,
    TabContainer, TabContent, TabPane, Form, FormControl,Button
} from 'react-bootstrap';

function App() {
  return (
     <BrowserRouter>
      <Container fluid>
          <Row>
              <Col>
                <MainDashboard /> 
             </Col>
          </Row>
         
          <Row>
          <Switch>
                <Route  path="/teams" component={Teams}/>
                <Route  path="/allmatches" component={AllMatches}/>
            </Switch>
          </Row>
      </Container>
    </BrowserRouter>
    )
}

export default App;
