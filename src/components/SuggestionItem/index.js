import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails, updateSearchText} = props
  const {suggestion} = suggestionItemDetails

  const onClickOfArrow = () => {
    updateSearchText(suggestion)
  }

  return (
    <li className="suggestionItem">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="Arrow"
        onClick={onClickOfArrow}
        className="arrow-icon"
      />
    </li>
  )
}

export default SuggestionItem
