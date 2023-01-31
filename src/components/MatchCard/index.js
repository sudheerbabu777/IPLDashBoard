// Write your code here
import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = cardDetails

  return (
    <li>
      <img
        src={competingTeamLogo}
        className="logo-competing"
        alt={competingTeam}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
