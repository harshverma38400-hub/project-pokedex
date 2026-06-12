import Pokemonlist from "../pokemonlist/Pokemonlist";
import Search from "../Searching/Search";
import './Pokedex.css';

function Pokedex()
{
return(
<div className="poke-wrap">
<h1 id="heading">pokedex</h1> 



 <Search/>
 <Pokemonlist/>
</div>
);
}

export default Pokedex