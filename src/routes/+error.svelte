<script>

	import { page } from "$app/state";

</script>
{#if page.status === 404}
<div class="fixed inset-0 flex items-center justify-center">
    <div class="absolute inset-0 flex flex-col items-center justify-center">
        <img src="/bluxboyconfused.webp" alt="Bluxboy confused" class="w-auto h-auto" />
        <p class="text-center text-4xl font-bold">Page not found</p>
    </div>
</div>
{:else}
<div class="h-screen flex items-center justify-center">
    <p class="text-center text-4xl">Error {page.status} - {page.error?.message}</p>
</div>
{/if}