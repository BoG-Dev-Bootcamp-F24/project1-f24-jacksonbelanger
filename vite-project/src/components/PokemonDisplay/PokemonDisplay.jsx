import './PokemonDisplay.css'
import TypeCard from '../TypeCard/TypeCard'

function PokemonDisplay({ imageUrl, name, types }) {
    const typesList = types.map(item => <li><TypeCard type={item}/></li>)

    return(
        <>
            <img src={imageUrl} alt="pokemonPhoto" id="pokemon-photo"/>
            <div id="name-container">
                <p id="name">{name}</p>
            </div>
            <h3 class="header3">Types:</h3>
            <ul id="types-list">{typesList}</ul>

        </>
    )
}

export default PokemonDisplay