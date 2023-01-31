// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="item-container">
        <img src={teamImageUrl} alt={name} className="teamCard" />
        <p className="team-title">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
