<script>
  import { A, Heading, Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup } from 'flowbite-svelte';
  import { page } from "$app/stores";
  import { onMount } from 'svelte';

  let sidebarVisible = true;
  let isMobile = false;
  const breakpoint = 1280; // Tailwind xl

  // Detect screen width
  function updateWidth() {
    isMobile = window.innerWidth < breakpoint;
    if (!isMobile) {
      sidebarVisible = true; // always show sidebar on desktop
    }
  }

  onMount(() => {
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  });

  function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
  }

  let site = {
    name: 'chARpack',
    href: '/',
    img: '/charpack_logo.svg'
  };

  $: sections = $page.data.sections;

</script>

<div class="flex flex-col">
  <!-- Main area: sidebar + content -->
  <main class="flex-1 w-full overflow-hidden flex justify-center">
    <div class="w-full xl:w-[80vw] max-w-[1600px] h-full grid gap-6
            grid-cols-1 xl:grid-cols-[clamp(12rem,18vw,16rem)_1fr]">

      <!-- Sidebar column for desktop only -->
      {#if !isMobile}
        <aside class={`sticky top-10 max-h-[calc(100vh-2.5rem)] overflow-y-auto 
                        xl:block ${sidebarVisible ? '' : 'invisible pointer-events-none'}
                        dark:bg-[#4b5563] bg-[#d1d5db]`}>
          <Sidebar class="sticky top-10 lg:w-64 md:w-auto max-h-[calc(100vh-2.5rem)] overflow-y-auto">
            <SidebarWrapper divClass="dark:bg-[#4b5563] bg-[#d1d5db] overflow-y-auto py-4 px-3 rounded">
              <SidebarGroup class="list-none">
                <SidebarBrand class="dark:bg-[#374151] text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" {site} />
              </SidebarGroup>
              {#each sections as section}
                <SidebarGroup class="list-none">
                <Heading tag="h4"><A class="text-gray-800 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" href={section.absRoute}>{section.title}</A></Heading>
                {#each section.pages as page}
                  <SidebarItem label={page.metadata.title} href={page.absRoute} class="hover:no-underline ">
                  </SidebarItem>
                {/each}
                </SidebarGroup>
              {/each}
            </SidebarWrapper>
          </Sidebar>
        </aside>
      {/if}

      <!-- Content column -->
      <main class="min-w-0 relative">
        <!-- Mobile overlay sidebar -->
        {#if sidebarVisible && isMobile}
          <div class="fixed inset-0 z-40 bg-black/30" on:click={toggleSidebar}></div>
          <aside class="fixed top-0 left-0 h-full w-64 z-50 dark:bg-[#4b5563] bg-[#d1d5db] overflow-auto">
            <Sidebar class="sticky top-10 lg:w-64 md:w-auto max-h-[calc(100vh-2.5rem)] overflow-y-auto">
              <SidebarWrapper divClass="dark:bg-[#4b5563] bg-[#d1d5db] overflow-y-auto py-4 px-3 rounded">
                <SidebarGroup class="list-none">
                  <SidebarBrand class="dark:bg-[#374151] text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" {site} />
                </SidebarGroup>
                {#each sections as section}
                  <SidebarGroup class="list-none">
                  <Heading tag="h4"><A class="text-gray-800 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" href={section.absRoute}>{section.title}</A></Heading>
                  {#each section.pages as page}
                    <SidebarItem label={page.metadata.title} href={page.absRoute} class="hover:no-underline ">
                    </SidebarItem>
                  {/each}
                  </SidebarGroup>
                {/each}
              </SidebarWrapper>
            </Sidebar>
          </aside>
        {/if}
        <!-- Show sidebar button for desktop only -->
        {#if !sidebarVisible}
          <div class="fixed top-1/2 left-0 z-50 -translate-y-1/2">
            <button on:click={() => (sidebarVisible = true)}
              class="rounded-r-md px-3 py-2 bg-[#4b5563] text-white shadow-lg hover:bg-[#d1d5db] focus:outline-none">
              ☰
            </button>
          </div>
        {/if}


        <div class="dark:bg-[#4b5563] bg-[#d1d5db] 2xl:w-full xl:w-5/6 lg:w-4/6 md:w-full mx-auto px-6 rounded-lg pb-10 pt-2 z-20">
            <slot />
        </div>
      </main>
    </div>
  </main>
</div>