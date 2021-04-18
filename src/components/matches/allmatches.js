import React, { Component } from 'react'
import  {getAllmatches} from '../../httpEndpoints/sportsdataApiEndpoints'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

class AllMatches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allMatches: null,
      error: null,
    }
  }

  componentDidMount() {
    
    getAllmatches()
      .then(matches => this.setState({ allMatches: matches.data }))
      .catch(err => this.setState({ error: err }))
    
   
   }

  render() {
    const {  allMatches } = this.state;
    return (
       <Container fluid>
            <Row>
                <Col>
                    <ShowMatchFixturesList allmatches = {allMatches}/>
                </Col>
            </Row>
         </Container>
    )
  }
}

const ShowMatchFixturesList = ({ allmatches }) => {
    if (allmatches) {
        console.log(`fetched`)
        return (
            <Container fluid>
                <Row>
                    <Table fluid>
                        <thead>
                            <td>STAGE NAME</td>
                            <td>GROUP NAME</td>
                            <td>HOME TEAM</td>
                            <td>AWAY TEAM</td>
                            <td>STATS</td>
                            <td>VENUE</td>
                            <td>DATE_TIME</td>
                        </thead>
                        {allmatches.data.map((info, i) => (
                            <tbody>
                                <tr key={info.match_id}>
                                    <td>{info.stage.name}</td>
                                    <td>{info.group ?
                                        info.group.group_name :
                                        null
                                    }</td>
                                    <td>{info.home_team.name}</td>
                                    <td>{info.away_team.name}</td>
                                    <td>
                                        <td>Home Score {info.stats.home_score}</td>
                                        <td>Away Score {info.stats.away_score}</td>
                                        <td>FullTime Score {info.stats.ft_score}</td>
                                    </td>
                                    <td>
                                        <td>{info.venue ?
                                        info.venue.name
                                        :
                                        null
                                        }</td>
                                        <td>
                                            {info.venue ?
                                                info.venue.capacity :
                                                null
                                            }
                                        </td>
                                        <td>
                                            {info.venue ?
                                                info.venue.city :
                                                null
                                            }
                                        </td>
                                    </td>
                                    <td>
                                            {info.match_start}
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </Row>
            </Container>
        )
    } else {
        return (
            <p> Loading ... </p>
        )
    }
}



export default AllMatches
