<template>
  <div class="flex h-screen relative">
    <OrganismsSidebar
      class="w-[296px] absolute inset-y-0 left-0 dark:bg-dark-background-primary"
    />

    <div class="flex-1 flex flex-col overflow-hidden ml-[296px]">
      <OrganismsHeader />

      <main
        class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800 p-6"
      >
        <slot />
      </main>
    </div>
  </div>
</template>
