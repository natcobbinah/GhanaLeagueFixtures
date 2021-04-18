import React, { Component } from 'react'
import { Container, Jumbotron, Nav,Navbar,NavDropdown,
    Card,CardDeck,CardGroup,CardColumns,ListGroup,Row,Col,Tabs,Tab,
    TabContainer, TabContent, TabPane, Form, FormControl,Button
} from 'react-bootstrap';
import { Link,Route,Switch,Redirect } from 'react-router-dom'
import NavigationBar from '../components/navbar/navbar'

class MainDashboard extends Component{
    render() {
        return (
            <Container fluid>
                <Row className="my-2">
                    <Col>
                      <NavigationBar />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Navbar bg="secondary" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav variant="pills">        
                                <Nav.Item>
                                        <Nav.Link>
                                            <Link to="/teams">Teams</Link>
                                        </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link>
                                            <Link to="/allmatches">All Matches</Link>
                                        </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default MainDashboard;