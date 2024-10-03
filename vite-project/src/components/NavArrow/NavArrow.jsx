import { useEffect } from 'react';
import './NavArrow.css'

function NavArrow({ direction, pokemonID, setPokemonID }) {
    const isDisabled = direction == 'left' ? pokemonID === 1 : pokemonID === 1025;

    function updatePokemonID() {
        if (direction == "right" && pokemonID < 1025) {
            setPokemonID(pokemonID + 1)
        } else if (direction == "left" && pokemonID > 1) {
            setPokemonID(pokemonID - 1)
        }
    }

    if (direction == "left") {
        return(
            <button onClick={() => updatePokemonID()} id="nav-arrow" style={{color: isDisabled ? '#cccccc' : '#000000'}}>&lt;</button>
        )
    } else {
        return(
            <button onClick={() => updatePokemonID()} id="nav-arrow" style={{color: isDisabled ? '#cccccc' : '#000000'}}>&gt;</button>
        )
    }
}

export default NavArrow