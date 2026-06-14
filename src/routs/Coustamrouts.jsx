import {  Routes ,Route } from "react-router-dom"
import Pokedex from "../Components/Pokedex/Pokedex"
import PokemonDetails from "../Components/pokemonDetals/PokemonDetails"

function Coustamrouts(){

    return(

        
         <Routes>
        <Route  path="/"  element= {<Pokedex/>}/> 
        <Route  path="/pokemon/:id"  element= {<PokemonDetails/>}/> 
    </Routes>
       
   
    )
}

export default Coustamrouts