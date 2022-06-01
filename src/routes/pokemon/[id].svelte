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
    export let abi;
    const type = pokeman.types[0].type.name;
    for (let i = 0; i < pokeman.abilities.length; i++) {
        abi += pokeman.abilities[i].ability.name + " ";
    }
    
</script>

<div class="flex flex-col items-center" transition:fade>
    <h1 class="text-4xl text-center my-8 text-white">{pokeman.name.charAt(0).toUpperCase() + pokeman.name.slice(1)}</h1>
    <img class="card-image h-36 w-36" src={pokeman.sprites['front_default']} alt={pokeman.name}/>
    <p class="text-white text-center">Type: <strong>{type.charAt(0).toUpperCase() + type.slice(1)}</strong> | Height: <strong>{pokeman.height/10}m</strong> | Weight <strong>{pokeman.weight/10}kg</strong></p>
   
    
</div>