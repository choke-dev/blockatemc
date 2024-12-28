<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Button } from "$lib/components/ui/button";

  // Icons
  import LucideMenu from '~icons/lucide/menu';
  import UilStatistics from '~icons/uil/statistics';
</script>

<header class="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-y backdrop-blur">
  <div class="container flex h-14 max-w-screen-2xl items-center justify-between">
    
    <div class="flex-shrink-0">
      <a href="/">
        <img
        src="/BlockateMCTitleText_NoMotto.png"
        alt="BlockateMC Title"
        class="hidden md:block w-55 h-8"
      />
      </a>
    </div>

    <div class="absolute items-center left-1/2 transform -translate-x-1/2">
      <a href="/">
        <img
        src="/BlockateMCLogo_Slanted.png"
        alt="BlockateMC Logo"
        class="block md:hidden w-8 h-8"
        />
      </a>
    </div>

    <div class="flex items-center">
      <div class="hidden md:flex gap-x-6">
        <a href="/statistics" class="hover:text-foreground/100 transition-colors text-foreground/70"> Statistics </a>
      </div>

      <Sheet.Root>
        <Sheet.Trigger> <LucideMenu class="size-8 md:hidden" /> </Sheet.Trigger>
        <Sheet.Content class="flex flex-col justify-end" side="right">
          <Sheet.Header />

          <div class="flex flex-col gap-y-2 items-center">
            <Button variant="outline" class="w-full" href="/statistics"> <UilStatistics /> Statistics </Button>
          </div>

        </Sheet.Content>
      </Sheet.Root>
    </div>
  </div>
</header>
