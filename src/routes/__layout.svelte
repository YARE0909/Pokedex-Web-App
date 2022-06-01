<script>
	import Nav from '../components/Nav.svelte';
	import { scrollbar } from 'tailwind-scrollbar';
</script>

<div
	class="min-h-screen m-0 bg-gray-800 
            h-34 scrollbar scrollbar-thumb-transparent 
            scrollbar-track-transparent">
	<Nav />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
