import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './PokemonDetails.css'

function PokemonDetails()
{
       const {id} = useParams();
       const [pokemon,setpokemon] =useState({})

        async function Pokemondata() {
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); 
            console.log(resp.data);
            
            setpokemon({
             name:resp.data.name,
             image:resp.data.sprites.other.dream_world.front_default,
             weight:resp.data.weight,
             height:resp.data.height,
             types:resp.data.types.map((t) => t.type.name)
         
            })
            
        }

        useEffect(() =>{

            Pokemondata()

        },[id]);
     

    return(
        <div >
        <img  className="pokemon-image-detail" src={pokemon.image} />
        <div className="pokemon-name-detail"> name:{pokemon.name}</div>
        <div className="pokemon-name-detail">height:{pokemon.height}</div>
        <div className="pokemon-name-detail">weight:{pokemon.weight}</div>
       <div className="pokemon-type-detail">{pokemon.types && pokemon.types.map((t)=> <div key={t}>{t}</div>)}</div> 
        </div>
    )
}

export default PokemonDetails