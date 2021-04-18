import { sportdatapiInstance } from './axiosInstance'


const apiKey = "apikey=0215ed40-9f91-11eb-a48c-db3e8e80379f";
const ghanaPremierLeagueId = 24;
const ghanaFACup = 25;
const countryId = "country_id=49";
const seasonId = "season_id=1649";


const getGhanaPremierLeagues = () => {
    return (
        sportdatapiInstance.get(`/soccer/leagues/${ghanaPremierLeagueId}?${apiKey}`)
    )
}

const getGhanaFACupLeagues = () => {
    return (
        sportdatapiInstance.get(`/soccer/leagues/${ghanaFACup}?${apiKey}`)
    )
}

const getSeasons = () => {
    return (
        sportdatapiInstance.get(`/soccer/seasons?${apiKey}&${seasonId}`)
    )
}

const getStages = () => {
    return (
        sportdatapiInstance.get(`/soccer/stages?${apiKey}`)
    )
}

const getSportTeams = () => {
    return (
        sportdatapiInstance.get(`/soccer/teams?${apiKey}&${countryId}`)
    )
}

const getAllmatches = () => {
    return (
        sportdatapiInstance.get(`/soccer/matches?${apiKey}&${seasonId}`)
    )
}

const getPlayers = () => {
    return (
        sportdatapiInstance.get(`/soccer/players?${apiKey}`)
    )
}

const getLeagueStandings = () => {
    return (
        sportdatapiInstance.get(`/soccer/standings?${apiKey}`)
    )
}

const getTopScorers = () => {
    return (
        sportdatapiInstance.get(`/soccer/topscorers?${apiKey}`)
    )
}

const getBookMakers = () => {
    return (
        sportdatapiInstance.get(`/soccer/bookmakers?${apiKey}`)
    )
}

const getMarkets = () => {
    return (
        sportdatapiInstance.get(`/soccer/markets?${apiKey}`)
    )
}

const getOdds = ({matchId }) => {
    return (
        sportdatapiInstance.get(`/soccer/odds/${matchId}?${apiKey}`)
    )
}

const getVenues = () => {
    return (
        sportdatapiInstance.get(`/soccer/venues?${apiKey}`)
    )
}

const getReferees = () => {
    return (
        sportdatapiInstance.get(`/soccer/referees?${apiKey}`)
    )
}

export {
    getGhanaPremierLeagues,getGhanaFACupLeagues, getSeasons, getStages, getSportTeams, getAllmatches, getPlayers,
    getLeagueStandings, getTopScorers, getBookMakers, getMarkets, getOdds, getVenues,
    getReferees
}