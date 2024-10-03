import './InfoButton.css'

function InfoButton({ infoOrMoves, handleClick, isSelected }) {
    return(
        <button onClick={handleClick} style={{ backgroundColor: isSelected ? '#7CFF79' : '#E8E8E8'}} id="info-button">
            {infoOrMoves}
        </button>
    )
}

export default InfoButton