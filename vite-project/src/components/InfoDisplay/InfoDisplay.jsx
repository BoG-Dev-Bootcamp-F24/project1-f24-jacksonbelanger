import './InfoDisplay.css'
import InfoButton from './InfoButton/InfoButton'
import { useState } from 'react';

function InfoDisplay({ info, moves }) {
    const [infoToggle, setInfoToggle] = useState("Info");

    const handleClick = (buttonName) => {
        if (infoToggle != buttonName) {
            setInfoToggle(buttonName)
        }
    }

    const movesList = moves.map(item => <li>{item}</li>)

    return(
        <>
            <h2 id="info-header">{infoToggle}</h2>
            <div id="info-container">
                {infoToggle == "Info" ?
                    <ul class="info-list">
                        <li>height: {info.height}m</li>
                        <li>weight: {info.weight}kg</li>
                        <li>hp: {info.hp}</li>
                        <li>attack: {info.attack}</li>
                        <li>defense: {info.defense}</li>
                        <li>special-attack: {info.specialAttack}</li>
                        <li>special-defense: {info.specialDefense}</li>
                        <li>speed: {info.speed}</li>
                    </ul>
                    :
                    <ul class="info-list">{movesList}</ul>
                }
            </div>
            <div id="toggle-container">
                <InfoButton infoOrMoves="Info" handleClick={() => handleClick("Info")} isSelected={infoToggle === "Info"}/>
                <InfoButton infoOrMoves="Moves" handleClick={() => handleClick("Moves")} isSelected={infoToggle === "Moves"}/>
            </div>
            
        </>
    )
}

export default InfoDisplay