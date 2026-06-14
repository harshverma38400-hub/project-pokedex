import Pokemonlist from "../pokemonlist/Pokemonlist";
import Search from "../Searching/Search";
import './Pokedex.css';

function Pokedex()
{
return(
<div className="poke-wrap">


 <Search/>
 <Pokemonlist/>
</div>
);
}

export default Pokedex