<script context="module">
    export async function load({params}) {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=200`;
        const res = await fetch(url);
        const data = await res.json();
        const loadedPokemon = data.results.map((data, index) => ({
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));
    return {props: {pokemon:loadedPokemon}}
    }
</script>

<script>
    import { fade } from "svelte/transition";
    import PokemanCard from "../components/pokemanCard.svelte"
    export let pokemon;

    let searchTerm = '';
    let filteredPokemon = [];

    $: {
        if(searchTerm){
            filteredPokemon = pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
        }else{
            filteredPokemon = [... pokemon]
        }
    }
</script>
<svelte:head>
    <title>Pokedéx</title>
</svelte:head>

<input class="w-full rounded-full text-lg p-3 my-2 border-gray-700 bg-gray-700 text-gray-200" bind:value={searchTerm} type="text" placeholder="Search Pokédex" transition:fade>

<div class="py-4 grid gap-4 md:grid-cols-3 grid-cols-1">
    
    {#each filteredPokemon as pokeman}
        <PokemanCard pokeman={pokeman}/>
    {/each}
</div>


