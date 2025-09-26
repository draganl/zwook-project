<template>
  <div
    class="h-screen relative bg-background-primary dark:bg-dark-background-primary overflow-hidden"
  >
    <div
      v-if="isSidebarOpen"
      @click="isSidebarOpen = false"
      class="fixed inset-0 bg-black/30 z-20 lg:hidden"
    ></div>

    <OrganismsSidebar
      @toggle-sidebar="isSidebarOpen = !isSidebarOpen"
      class="fixed lg:relative inset-y-0 left-0 z-30 transform -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0"
      :class="[
        isSidebarOpen
          ? 'translate-x-0 w-[296px] p-6'
          : 'lg:w-[296px] w-0 p-0 lg:p-6',
      ]"
    />

    <div class="flex-1 flex flex-col overflow-hidden">
      <OrganismsHeader />

      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <slot />
      </main>
      <OrganismsFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isSidebarOpen = ref(false);
</script>

