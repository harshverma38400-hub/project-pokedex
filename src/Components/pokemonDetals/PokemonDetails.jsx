import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './PokemonDetails.css'
import usePokemonlist from "../../hooks/usePokemonlist";
import usePokedetails from "../../hooks/usePokedetails";

function PokemonDetails()
{

      const {id} = useParams();
       const [pokemon,pokemonListstate] =usePokedetails(id)
  
     

    return(
        <div >
        <img  className="pokemon-image-detail" src={pokemon.image} />
        <div className="pokemon-name-detail"> name:{pokemon.name}</div>
        <div className="pokemon-name-detail">height:{pokemon.height}</div>
        <div className="pokemon-name-detail">weight:{pokemon.weight}</div>
       <div className="pokemon-type-detail">{pokemon.types && pokemon.types.map((t)=> <div key={t}>{t}</div>)}</div> 
  <div>
  {
  pokemon.types &&
  pokemonListstate?.pokemonlist &&

  <div>
    more {pokemon.types[0]}

    <ul>
      {pokemonListstate.pokemonlist.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  </div>
}

        </div>

        </div>
    


    )}

export default PokemonDetails