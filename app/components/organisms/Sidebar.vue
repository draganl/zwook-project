<template>
  <aside
    class="h-screen pb-64 bg-surface-primary dark:bg-dark-background-secondary"
  >
    <NuxtLink class="mb-6 block" to="/" id="logo">
      <img src="/images/logo.svg" alt="Logo" class="dark:hidden block" />
      <img src="/images/logo-dark.svg" alt="Logo" class="dark:block hidden" />
    </NuxtLink>
    <MoleculesNavigation />
    <MoleculesUpdateCard :class="[isSidebarOpen ? 'block' : 'hidden']" />

    <button
      @click="
        $emit('toggle-sidebar');
        isSidebarOpen = !isSidebarOpen;
      "
      aria-label="Toggle sidebar"
      class="lg:hidden absolute top-14 -right-8 p-2 bg-surface-primary dark:bg-dark-background-secondary rounded-r-lg"
    >
      <UiIcon name="menu-1" height="16" width="16" />
    </button>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
defineEmits(["toggle-sidebar"]);

const isSidebarOpen = ref(false);
</script>

