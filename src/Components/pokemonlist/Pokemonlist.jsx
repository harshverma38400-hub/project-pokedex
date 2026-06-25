import {  useEffect ,useState } from "react";
import axios from 'axios'
import './Pokemonlist.css';
import Pokemon from "../Pokemon/Pokemon";
import usePokemonlist from "../../hooks/usePokemonlist";
function Pokemonlist()
{

   const {pokemonListstate,setpokeListstste} =usePokemonlist(false)

    return(

    
        <div className="pokemonlist-wrap" >

             <div> Pokemonlist </div>

            <div className="poke-wrapper">
            {
                (pokemonListstate.isloading) ? ' Its Loading baby...' : 
                pokemonListstate.pokemonlist.map((p)=> <Pokemon  name ={p.name}  image={p.image} key={p.id}  id={p.id}/>)
                 
              }

            </div>
              <div className="button">
              <button
         disabled={pokemonListstate.prevUrl == null}  onClick={() => setpokeListstste({ ...pokemonListstate,pokedataUrl: pokemonListstate.prevUrl})}>prev</button>
         
           <button
         disabled={pokemonListstate.nextUrl == null} onClick={() => setpokeListstste({...pokemonListstate,pokedataUrl: pokemonListstate.nextUrl })}>next</button>
         </div>
         
        </div>
    );

}

export default Pokemonlist;