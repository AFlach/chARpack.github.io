<script>
  import { A, Heading, Sidebar, SidebarWrapper, SidebarBrand, SidebarItem, SidebarGroup, Button } from 'flowbite-svelte';
  import { page } from "$app/stores";
  import { get } from 'svelte/store';
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

	const currentPage = get(page);
	const currentVersion = currentPage.params.version;
	const section = currentPage.params.section;
	const subPage = currentPage.params.page;

	$: selectedVersion = currentVersion;

	function handleVersionChange(event) {
		const newVersion = event.target.value;

		if (newVersion !== currentVersion) {
			const newPath = `/manual/${newVersion}/${section}/${subPage}`;
			//goto(newPath);
      window.location.href = newPath;
		}
	}

  let sections = $page.data.sections;
  let versions = $page.data.versions;

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
                        bg-gray-100 dark:bg-gray-900`}>
          <Sidebar class="sticky top-10 lg:w-64 md:w-auto max-h-[calc(100vh-2.5rem)] overflow-y-auto">
            <SidebarWrapper class="dark:bg-gray-900">
              <SidebarGroup class="list-none">
                <SidebarBrand class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" {site} />
                <select id="dropdown" on:change={handleVersionChange} bind:value={selectedVersion}>
                  {#each versions as option}
                    <option value={option}>{option}</option>
                  {/each}
                </select>
              </SidebarGroup>
              {#each sections as section}
                <SidebarGroup class="list-none" ulClass="space-y-0">
                <Heading tag="h4"><A class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" href={section.absRoute}>{section.title}</A></Heading>
                {#each section.pages as page}
                  <SidebarItem label={page.metadata.title} href="/manual/{selectedVersion}/{page.route}" class="hover:no-underline">
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
          <aside class="fixed top-0 left-0 h-full w-64 z-50 bg-gray-100 dark:bg-gray-700 overflow-auto">
            <Sidebar class="sticky top-10 lg:w-64 md:w-auto max-h-[calc(100vh-2.5rem)] overflow-y-auto">
              <SidebarWrapper class="dark:bg-gray-900">
                <SidebarGroup class="list-none">
                  <SidebarBrand class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" {site} />
                  <select id="dropdown" on:change={handleVersionChange} bind:value={selectedVersion}>
                    {#each versions as option}
                      <option value={option}>{option}</option>
                    {/each}
                  </select>
                </SidebarGroup>
                {#each sections as section}
                  <SidebarGroup class="list-none" ulClass="space-y-0">
                  <Heading tag="h4"><A class="text-gray-700 dark:text-gray-400 hover:text-gray-400 dark:hover:text-white hover:no-underline" href={section.absRoute}>{section.title}</A></Heading>
                  {#each section.pages as page}
                    <SidebarItem label={page.metadata.title} href="/manual/{selectedVersion}/{page.route}" class="hover:no-underline">
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
              class="rounded-r-md px-3 py-2 bg-gray-800 text-white shadow-lg hover:bg-gray-700 focus:outline-none">
              ☰
            </button>
          </div>
        {/if}
        <!-- Page content -->
        <div class="mx-auto px-6 py-4 bg-gray-100 dark:bg-gray-700 rounded-lg pb-10 pt-2 z-20">
          <slot />
        </div>
      </main>
    </div>
  </main>
</div>