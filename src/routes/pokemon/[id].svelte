<script context="module">
    export async function load({params}) {
        const id = params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokeman = await res.json();
        return {props: {pokeman}};
    }
</script>

<script>
    import { fade } from "svelte/transition";
    export let pokeman;
    const type = pokeman.types[0].type.name
</script>

<div class="flex flex-col items-center" transition:fade>

    <h1 class="text-4xl text-center my-8 uppercase text-white">{pokeman.name}</h1>
    <p class="text-white">Type: <strong>{type.charAt(0).toUpperCase() + type.slice(1)}</strong> | Height: <strong>{pokeman.height/10}m</strong> | Weight <strong>{pokeman.weight/10}kg</strong></p>
    
    <img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name}/>
</div>