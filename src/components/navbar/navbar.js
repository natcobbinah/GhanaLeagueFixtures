import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const NavigationBar = () => {
    return (
                     <Navbar bg="dark" variant="dark" fixed="top">
                        <Navbar.Brand href="#home">Ghana Sports</Navbar.Brand>
                        <Nav className="mr-auto">
                          <Nav.Link href="#home">All NationWide Sports Available here</Nav.Link>
                        </Nav>
                    </Navbar> 

    )
}

export default NavigationBar;