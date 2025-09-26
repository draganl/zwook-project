<template>
  <header class="flex items-center gap-5 justify-between py-3 px-6">
    <UiInput
      placeholder="Search anything here"
      class="hidden lg:block"
      icon="search-1"
    ></UiInput>
    <NuxtLink class="h-10 block lg:hidden" to="/" id="logo">
      <img src="/images/logo.svg" alt="Logo" class="dark:hidden block h-full" />
      <img
        src="/images/logo-dark.svg"
        alt="Logo"
        class="dark:block hidden h-full"
      />
    </NuxtLink>
    <div
      class="flex justify-between items-center text-text-primary dark:text-dark-text-primary"
    >
      <button
        type="button"
        aria-label="Search"
        class="lg:hidden"
        @click="isSearchOpen = !isSearchOpen"
      >
        <UiIcon name="search-1" class="h-8 w-8 p-2" />
      </button>
      <UiIcon name="graph-neutral" class="h-8 w-8 cursor-pointer p-2" />
      <UiIcon
        name="interface-alert-alarm-bell-2-alert-bell-ring-notification-alarm"
        class="h-8 w-8 cursor-pointer p-2 mr-5"
      />
      <NuxtLink class="block" to="/login" id="login">
        <figure class="relative">
          <img
            alt="Avatar"
            src="/images/avatar.jpg"
            class="rounded-full overflow-hidden border border-border-primary"
          />
          <div
            class="absolute bottom-0 right-0 rounded-full h-3 w-3 border-surface-primary dark:border-dark-surface-primary bg-surface-success"
          ></div>
        </figure>
      </NuxtLink>
      <div class="ml-2 mr-3 hidden md:block">
        <p class="font-semibold text-text-sm">Albert Flores</p>
        <a
          href="mailto:albert@flores.com"
          class="font-medium text-xs text-primary-placeholder dark:text-dark-text-primaryPlaceholder"
          >albert@flores.com</a
        >
      </div>
      <UiIcon
        name="interface-arrows-button-down-arrow-down-keyboard"
        class="cursor-pointer hidden md:block"
      />
    </div>
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div
        v-if="isSearchOpen"
        class="absolute w-full p-4 bg-background-primary dark:bg-dark-background-primary border-b border-border-primary dark:border-dark-border-primary lg:hidden"
      >
        <UiInput placeholder="Search anything here" icon="search-1"></UiInput>
      </div>
    </transition>
  </header>
</template>
<script setup lang="ts">
import { ref } from "vue";
const isSearchOpen = ref(false);
</script>
