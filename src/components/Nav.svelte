<script>
    import { fade } from "svelte/transition";
</script>

<nav class="flex flex-row w-full rounded-xl py-4 sticky top-0 z-50 bg-gray-900">
    <h1 class="mx-4 text-lg hover:animate-pulse text-gray-200" transition:fade >Pokedéx |</h1>
    <a class="mx-4 text-lg hover:text-blue-500 hover:animate-pulse animate-pulse text-gray-200" href="/" transition:fade>Home</a>
    <a class="mx-4 text-lg hover:text-blue-500 hover:animate-pulse animate-pulse text-gray-200" href="/about" transition:fade>About</a>
</nav>