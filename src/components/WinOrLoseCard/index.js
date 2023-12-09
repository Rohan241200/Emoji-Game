import './index.css'

const WinOrLose = props => {
  const {gameRestart, score} = props

  const onPlayAgain = () => {
    gameRestart()
  }

  const isHeading = score === 12 ? 'Win' : 'Lose'
  const isBest = score === 12 ? 'Best Score' : 'Score'
  const isImage =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="winorlose">
      <div className="winorlose-context">
        <h1 className="winorlose-heading">You {isHeading}</h1>
        <p className="win-heading">{isBest}</p>
        <p className="winorlose-score">{score}/12</p>
        <button className="play-again" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img src={isImage} alt="win or lose" className="winorlose-img" />
    </div>
  )
}

export default WinOrLose
