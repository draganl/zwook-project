<template>
  <div
    class="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  >
    <OrganismsSidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <OrganismsHeader />

      <main
        class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800 p-6"
      >
        <slot />
      </main>
    </div>
  </div>
</template>
