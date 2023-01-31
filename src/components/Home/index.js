// Write your code here
import {Component} from 'react'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    iplTeamList: [],
  }

  componentDidMount() {
    this.getTeamCardDetails()
  }

  getTeamCardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const update = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplTeamList: update})
  }

  render() {
    const {iplTeamList} = this.state

    return (
      <div className="app-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="title">IPL Dashboard</h1>
        </div>
        <ul className="ipl-team-list">
          {iplTeamList.map(each => (
            <TeamCard teamCardDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
