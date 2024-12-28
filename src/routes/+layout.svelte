<script lang="ts">
	import Header from '$lib/components/ui/custom/Header.svelte';
	import "../app.css";
	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen">
	<div class="absolute inset-0 h-full w-full bg-[radial-gradient(#241C1C_1px,transparent_1px)] [background-size:16px_16px] -z-50"></div> <!-- optimally, i would want this to calculate the color based on the background with a lighter shade, but i dont know how, if you're reading this and know how, please let me know -->
	<div class="fixed top-0 inset-x-0 hidden md:block">
		<Header />
	</div>
	<div class="flex-grow mt-0 mb-14 md:mt-14 md:mb-0">
		{@render children()}
	</div>
	<div class="fixed bottom-0 inset-x-0 md:hidden">
		<Header />
	</div>
</div>

