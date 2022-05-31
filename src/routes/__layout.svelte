<script>
	import Nav from '../components/Nav.svelte';
	import { scrollbar } from 'tailwind-scrollbar';
</script>

<div
	class="bg-gray-800 min-h-screen m-0 
            h-32 scrollbar scrollbar-thumb-transparent 
            scrollbar-track-transparent">
	<Nav />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
