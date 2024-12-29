<svelte:head>
    <title>BlockateMC</title> 
</svelte:head>

<script lang="ts">
	import CopyToClipboard from "$lib/components/ui/custom/CopyToClipboard.svelte";
	import { MINECRAFT_SERVER_IP } from "$lib/config";
</script>

<div class="flex flex-col items-center justify-center">
	<img src="/BlockateMCTtitleText_withMotto.png" alt="BlockateMC Title" class="w-[80%] md:w-[50%] mt-32" />

	<div class="mt-8 flex flex-col items-center justify-center">
	  <CopyToClipboard text={MINECRAFT_SERVER_IP} />
	</div>

</div>
