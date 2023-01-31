// Write your code here
import {Component} from 'react'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {
    matchList: {},
  }

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const newData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {latestMatchDetails} = newData
    const newLatestDetails = {
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      result: latestMatchDetails.result,
      umpires: latestMatchDetails.umpires,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
    }
    const {recentMatches} = newData
    const newRecentMatches = recentMatches.map(eachValue => ({
      id: eachValue.id,
      competingTeam: eachValue.competing_team,
      competingTeamLogo: eachValue.competing_team_logo,
      result: eachValue.result,
      matchStatus: eachValue.match_status,
    }))
    newData.recentMatches = newRecentMatches
    newData.latestMatchDetails = newLatestDetails
    this.setState({matchList: newData})
  }

  render() {
    const {matchList} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchList

    return (
      <div className="container KKR">
        <h1>sudhhher</h1>
        <img src={teamBannerUrl} alt="teamBannerUrl" className="banner-image" />
        <LatestMatch
          key={latestMatchDetails.id}
          latestMatchItem={latestMatchDetails}
        />
      </div>
    )
  }
}

export default TeamMatches
