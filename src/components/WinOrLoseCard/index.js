import './index.css'

const WinOrLose = props => {
  const {gameRestart, score} = props

  const onPlayAgain = () => {
    gameRestart()
  }

  return (
    <div className="winorlose">
      <div className="winorlose-context">
        <h1 className="winorlose-heading">You Lose</h1>
        <p className="winorlose-score">{score}/12</p>
        <button className="play-again" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="lose"
        className="winorlose-img"
      />
    </div>
  )
}

export default WinOrLose
