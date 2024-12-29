<script lang="ts">
	let { text } = $props();

	import { Button } from '$lib/components/ui/button/index.js';

	import LucideCopy from '~icons/lucide/copy';
	import LucideCheck from '~icons/lucide/check';

	function copyToClipboard() {
		navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => (copied = false), 3000);
	}

	let copied = $state(false);
</script>

<div class="flex w-full items-center justify-between rounded-lg bg-zinc-900 px-4 py-2 font-mono">
	<div>{text}</div>
	<button class="inline-flex h-6 w-6 items-center justify-center rounded-md text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-700 hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ml-2" onclick={copyToClipboard}>
		<span class="sr-only">Copy</span>
		{#if copied}
			<LucideCheck class="size-3" />
		{:else}
			<LucideCopy class="size-3" />
		{/if}
	</button>
</div>
