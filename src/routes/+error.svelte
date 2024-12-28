<script>

	import { page } from "$app/state";

</script>
{#if page.status === 404}
<div class="fixed inset-0 flex items-center justify-center pointer-events-none">
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <img src="/bluxboyconfused.webp" alt="Bluxboy confused" class="w-auto h-auto" />
        <h1 class="text-center text-4xl font-bold">Page not found</h1>
    </div>
</div>
{:else}
<div class="fixed inset-0 flex items-center justify-center pointer-events-none">
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-center text-4xl font-bold">Something went wrong</h1>
        <p class="text-center text-lg">{page.error?.message}</p>
    </div>
</div>
{/if}