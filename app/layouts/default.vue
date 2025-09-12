<template>
  <div
    class="flex h-screen relative bg-background-primary dark:bg-dark-background-primary"
  >
    <OrganismsSidebar class="w-[296px] absolute inset-y-0 left-0" />

    <div class="flex-1 flex flex-col overflow-hidden">
      <OrganismsHeader />

      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <slot />
      </main>
      <OrganismsFooter />
    </div>
  </div>
</template>
