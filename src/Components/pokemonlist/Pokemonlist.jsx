import {  useEffect ,useState } from "react";
import axios from 'axios'
import './Pokemonlist.css';
import Pokemon from "../Pokemon/Pokemon";
function Pokemonlist()
{
    const [pokemonlist ,setpokemonlist] =useState([])
    const [isloading , setdata]=useState(true)
   const [pokedataUrl ,setpokedata] =useState('https://pokeapi.co/api/v2/pokemon')

   const [nextUrl,setnextUrl] =useState()
   const [prevUrl,setprevUrl] =useState()

      async function downloadpokemon() {
        
        const resp = await axios.get(pokedataUrl)
       // console.log(resp.data)                // resp.data for total count
       const pokemonresult = resp.data.results;
        console.log(resp.data)                // resp.data for total count or ya next or previous deta hai jo inspect m dika gi
        setnextUrl(resp.data.next);
        setprevUrl(resp.data.previous);
       const pokemonResultprovider = pokemonresult.map((pokemon)=>axios.get(pokemon.url) )
       const  pokemondata =await axios.all(pokemonResultprovider)
       console.log(pokemondata);
       const rep = pokemondata.map((poke)=>
    {
        const pokemon =poke.data;     // isma pokemon data ak puria array hai abhi jisk anderr sara data hia lakin ham map ko use krr k sirf un data ko nikal rha hai jinka use hai  (poke.data (jo data jo inspect sa choose kiya gya hai ki kon sa chiya sirf .ka sath likh do))
         return {
            id:pokemon.id,
            name:pokemon.name,
            image:pokemon.sprites.other.dream_world.front_default,
        type:pokemon.types}
    })
    console.log(rep);
    
    setpokemonlist(rep)
    setdata(false)
       
 
       }
        
        useEffect(()=>{

            downloadpokemon()
            
      

        },[pokedataUrl]);

    return(

    
        <div className="pokemonlist-wrap" >

             <div> Pokemonlist </div>

            <div className="poke-wrapper">
            {
                (isloading) ? ' Its Loading baby...' : 
                 pokemonlist.map((p)=> <Pokemon  name ={p.name}  image={p.image} key={p.id}  id={p.id}/>)
                 
              }

            </div>
              <div className="button">
                <button disabled ={prevUrl == null} onClick={ () => setpokedata(prevUrl)}>prev</button>
                <button disabled ={nextUrl == null} onClick={ () => setpokedata(nextUrl)}>next</button>
              </div>
         
        </div>
    );

}

export default Pokemonlist;