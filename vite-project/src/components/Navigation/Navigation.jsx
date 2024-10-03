import NavArrow from "../NavArrow/NavArrow"
import './Navigation.css'

function Navigation({ pokemonID, setPokemonID }) {
    return(
        <div id="nav">
            <NavArrow direction="left" pokemonID={pokemonID} setPokemonID={setPokemonID}/>
            <NavArrow direction="right" pokemonID={pokemonID} setPokemonID={setPokemonID}/>
        </div>
    )
}

export default Navigation