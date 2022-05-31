<script>
    import { fade } from "svelte/transition";
    export let pokeman;
</script>
<a class="p-6 bg-gray-700 mb-0 text-gray-400 text-center rounded-lg flex items-center flex-col hover:bg-gray-600 hover:text-blue-500" href={`/pokemon/${pokeman.id}`} transition:fade>
    <img class="h-30 w-30" src={pokeman.image} alt={pokeman.name}>
    <h2 class="uppercase text-xl">{pokeman.name}</h2>
</a>
