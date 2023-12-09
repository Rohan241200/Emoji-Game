import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLose from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, restartGame: true, clickCheckEmoji: []}

  onGameRestart = () => {
    const {score} = this.state
    this.setState({restartGame: true, topScore: score, score: 0})
  }

  onClickEmojiChange = id => {
    const {emojisList} = this.props
    const {clickCheckEmoji} = this.state
    const checkIsSame = clickCheckEmoji.includes(id)
    const isLength = clickCheckEmoji.length

    console.log(checkIsSame)
    if (!checkIsSame) {
      this.setState(prevState => ({
        clickCheckEmoji: [...prevState.clickCheckEmoji, id],
        score: prevState.score + 1,
      }))
    } else {
      this.setState({restartGame: false})
    }
  }

  render() {
    const {score, topScore, restartGame} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    const randomE = shuffledEmojisList()
    return (
      <>
        <NavBar score={score} topScore={topScore} />
        <div className="bg-container">
          <div className="bg-card">
            {restartGame && (
              <ul className="items">
                {randomE.map(each => (
                  <EmojiCard
                    randomemoji={each}
                    onClickEmojiChange={this.onClickEmojiChange}
                    key={each.id}
                  />
                ))}
              </ul>
            )}
            {!restartGame && (
              <WinOrLose
                finishGame={this.finishGame}
                gameRestart={this.onGameRestart}
                score={score}
              />
            )}
          </div>
        </div>
      </>
    )
  }
}

export default EmojiGame
