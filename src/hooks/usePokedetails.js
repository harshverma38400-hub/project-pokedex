import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonlist from "./usePokemonlist";

function usePokedetails(id) {

    const [pokemon, setpokemon] = useState({});

    const {
        pokemonListstate,
        setpokeListstste
    } = usePokemonlist(true);

    async function Pokemondata() {

        const resp = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );

        setpokemon({
            name: resp.data.name,
            image: resp.data.sprites.other.dream_world.front_default,
            weight: resp.data.weight,
            height: resp.data.height,
            types: resp.data.types.map((t) => t.type.name)
        });

        setpokeListstste((prev) => ({
            ...prev,
            type: resp.data.types?.[0]?.type?.name || ""
        }));
    }

    useEffect(() => {
        Pokemondata();
    }, [id]);

    return [pokemon, pokemonListstate];
}

export default usePokedetails;