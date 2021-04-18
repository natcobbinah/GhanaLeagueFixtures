import React, { Component } from 'react'
import  {
    getGhanaPremierLeagues, getSeasons, getStages, getSportTeams, getAllmatches, getPlayers,
    getGhanaFACupLeagues,getLeagueStandings, getTopScorers, getBookMakers, getMarkets, getOdds, getVenues,
    getReferees
} from './httpEndpoints/sportsdataApiEndpoints'
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      premierleagues: null,
      ghanafacup: null,
      seasons: null,
      stages: null,
      sportTeams: null,
      allMatches: null,
      players: null,
      leagueStandings: null,
      topScorers: null,
      bookmakers: null,
      markets: null,
      odds: null,
      venues: null,
      referees: null,
      error: null,
    }
  }

  componentDidMount() {

    getGhanaPremierLeagues()
      .then(leagues => this.setState({ premierleagues: leagues.data }))
      .catch(err => this.setState({ error: err }))
    
    getGhanaFACupLeagues()
      .then(leagues => this.setState({ ghanafacup: leagues.data }))
      .catch(err => this.setState({ error: err }))
    
    getSeasons()
      .then(seasons => this.setState({ seasons: seasons.data }))
      .catch(err => this.setState({ error: err }))
    
    getStages()
      .then(stages => this.setState({ stages: stages.data }))
      .catch(err => this.setState({ error: err }))
    
    getSportTeams()
      .then(teams => this.setState({ sportTeams: teams.data }))
      .catch(err => this.setState({ error: err }))
    
    getAllmatches()
      .then(matches => this.setState({ allMatches: matches.data }))
      .catch(err => this.setState({ error: err }))
    
    getPlayers()
      .then(players => this.setState({ players: players.data }))
      .catch(err => this.setState({ error: err }))
    
    getLeagueStandings()
      .then(leagueStandings => this.setState({ leagueStandings: leagueStandings.data }))
      .catch(err => this.setState({ error: err }))
    
    getTopScorers()
      .then(topScorers => this.setState({ topScorers: topScorers.data }))
      .catch(err => this.setState({ error: err }))
    
    getBookMakers()
      .then(bookmakers => this.setState({ bookmakers: bookmakers.data }))
      .catch(err => this.setState({ error: err }))
    
    getMarkets()
      .then(markets => this.setState({ markets: markets.data }))
      .catch(err => this.setState({ error: err }))
    
    getVenues()
      .then(venue => this.setState({ venue: venue.data }))
      .catch(err => this.setState({ error: err }))
    
    getReferees()
      .then(referees => this.setState({ referees: referees.data }))
      .catch(err => this.setState({ error: err }))
   }

  render() {
    const { premierleagues, ghanafacup, seasons, stages, sportTeams, allMatches, players, leagueStandings, topScorers,
            bookmakers,markets,odds,venues,referees,error} = this.state;
    return (
      <div>
        {console.log(sportTeams)}
      </div>
    )
  }
}

export default App;
