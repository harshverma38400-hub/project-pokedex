import {  useEffect ,useState } from "react";
import axios from 'axios'
import './Pokemonlist.css';
import Pokemon from "../Pokemon/Pokemon";
function Pokemonlist()
{
//     const [pokemonlist ,setpokemonlist] =useState([])
//     const [isloading , setdata]=useState(true)
//    const [pokedataUrl ,setpokedata] =useState('https://pokeapi.co/api/v2/pokemon')

//    const [nextUrl,setnextUrl] =useState('')
//    const [prevUrl,setprevUrl] =useState('')

   const [pokemonListstate,setpokeListstste] =useState({
    pokemonlist : [],
    isloading :true,
    pokedataUrl: 'https://pokeapi.co/api/v2/pokemon',
    nextUrl :  '',
    prevUrl:""
   })

      async function downloadpokemon() {
       
        const resp = await axios.get(pokemonListstate.pokedataUrl)
       // console.log(resp.data)                // resp.data for total count
       const pokemonresult = resp.data.results;
        console.log(resp.data)                // resp.data for total count or ya next or previous deta hai jo inspect m dika gi
        //setnextUrl(resp.data.next);

        //setprevUrl(resp.data.previous);

        setpokeListstste((state)=>({
          ...state ,
          nextUrl:resp.data.next ,
          prevUrl:resp.data.previous
        }));

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
        type:pokemon.types  }
    })
    console.log(rep);
    
    //   setpokemonlist(rep)

    setpokeListstste((state)=> ({
      ...state, 
      pokemonlist:rep,
      isloading:false}));

     //setdata(false)
        //setpokeListstste({...pokemonListstate,isloading:false})
    
       }
        
        useEffect(()=>{

            downloadpokemon()
            

        },[pokemonListstate.pokedataUrl]);

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