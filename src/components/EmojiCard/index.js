import './index.css'

const EmojiCard = props => {
  const {randomemoji, onClickEmojiChange} = props
  const {id, emojiName, emojiUrl} = randomemoji

  const onClickEmoji = () => {
    onClickEmojiChange(id)
  }

  return (
    <li className="list">
      <button type="button" className="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
