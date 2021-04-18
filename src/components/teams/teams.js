import React, { Component } from 'react'
import  {getSportTeams} from '../../httpEndpoints/sportsdataApiEndpoints'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sportTeams: null,
      error: null,
    }
  }

  componentDidMount() {
    
    getSportTeams()
      .then(teams => this.setState({ sportTeams: teams.data }))
      .catch(err => this.setState({ error: err }))
    
   
   }

  render() {
    const {  sportTeams } = this.state;
    return (
       <Container fluid>
            <Row>
                <Col>
                    <ShowTeamList teamsData={sportTeams}/>
                </Col>
            </Row>
         </Container>
    )
  }
}

const ShowTeamList = ({ teamsData}) => {
    if (teamsData) {
        return (
            <Container fluid>
                <Row>
                    {teamsData.data.map((team, i) => (
                        <Col md={4}>
                            <CardDeck className="my-4">
                                <Card key={i}>
                                    <Card.Img variant="top" src={team.logo}
                                                                     style={{ height: 267, width: 398 }} />
                                    <Card.Body>
                                        <Card.Title>{team.name}</Card.Title>
                                        <Card.Text>
                                            {team.short_code}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Team ID { team.team_id}</small>
                                    </Card.Footer>
                                </Card>
                            </CardDeck>
                        </Col>
                    ))
                    }
                </Row>
            </Container>
        )
    } else {
        return (
        <p> Loading ... </p>
       )
    }
}


export default Teams;
