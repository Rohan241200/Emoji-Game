import './index.css'

const NavBar = props => {
  const {score, topScore, noScore} = props
  let isStatus
  if (noScore === true) {
    isStatus = true
  } else {
    isStatus = false
  }

  return (
    <nav className="navbar">
      <div className="emoji-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="game">Emoji Game</h1>
      </div>
      {isStatus && (
        <div className="user-score-card">
          <p className="user-score">Score: {score}</p>
          <p className="user-score top">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
