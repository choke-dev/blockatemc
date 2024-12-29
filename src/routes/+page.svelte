<svelte:head>
    <title>BlockateMC</title> 
</svelte:head>

<script lang="ts">
	import { MINECRAFT_SERVER_IP } from "$lib/config";
	import type { PageServerData } from "./$types";

	import CopyToClipboard from "$lib/components/ui/custom/CopyToClipboard.svelte";
	import Separator from "$lib/components/ui/separator/separator.svelte";

	import LucideLoaderCircle from '~icons/lucide/loader-circle';
	import LineMdPersonOff from '~icons/line-md/person-off';
	import LineMdFileDocumentOff from '~icons/line-md/file-document-off';
	import LucideServerOff from '~icons/lucide/server-off';

	let { data }: { data: PageServerData } = $props();
</script>

<div class="flex flex-col items-center justify-center">
	<img src="/BlockateMCTtitleText_withMotto.png" alt="BlockateMC Title" class="w-[80%] md:w-[50%] mt-32" />

	<div class="mt-8 flex flex-col items-center justify-center">
	  <CopyToClipboard text={MINECRAFT_SERVER_IP} />
	</div>

	<div class="my-16 p-2 border rounded-lg w-auto">
		<h1 class="font-bold text-2xl">Player list</h1>
		<Separator class="my-2" />
	
		{#await data.serverInfoPromise}
			<div class="flex justify-center items-center">
				<LucideLoaderCircle class="animate-spin size-8" />
			</div>
		{:then serverInfo}
			{#if serverInfo}
				
				{#if serverInfo?.players?.sample && serverInfo.players.sample.length > 0}
					<div class={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-${Math.ceil(serverInfo.players.sample.length / 8)} gap-2`}>
						{#each serverInfo.players.sample as player}
							<div class="flex items-center gap-2">
							  <img 
								src={`https://api.mineatar.io/face/${player.id}`} 
								alt={`${player.name}'s head`} 
								class="w-8 h-8"
							  >
							  <p>{player.name}</p>
							</div>
						{/each}
					</div>
				{:else if serverInfo?.players?.sample && serverInfo.players.sample === 0}
					<div class="flex flex-col items-center justify-center">
						<LineMdPersonOff class="size-8" />
						<h2>There are currently no players online</h2>
					</div>
				{:else if !serverInfo?.players?.sample}
				<div class="flex flex-col items-center justify-center">
					<LineMdFileDocumentOff class="size-8" />
					<h2>Server did not provide a player list</h2>
				</div>
				{/if}
	
			{:else}
				<div class="flex flex-col items-center justify-center">
					<LucideServerOff class="size-8" />
					<h2>Server is offline</h2>
				</div>
			{/if}
		{:catch error}
			<p>Failed to load player list: {error.message}</p>
		{/await}
	</div>
	
	
</div>