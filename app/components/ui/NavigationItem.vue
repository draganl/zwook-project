<template>
  <div class="mb-4">
    <div class="relative w-full">
      <NuxtLink
        v-slot="{ isActive }"
        :to="item.to"
        class="flex-1 flex items-center text-[#4B5565] px-3 py-2 rounded-md transition duration-300 ease-in-out hover:bg-surface-primaryActive dark:hover:bg-dark-primaryActive w-full block"
        :class="{
          'text-text-primary font-semibold': isActive,
        }"
      >
        <UiIcon :name="item.icon" class="mr-3" height="16" />
        <span>{{ item.label }}</span>
      </NuxtLink>
      <NuxtLink
        :to="item.button.to"
        v-if="item.button"
        class="bg-surface-warning absolute top-0 right-0 mt-2 mr-8 rounded-full text-text-xxs rounded-full py-1 px-2 text-text-primary"
        >{{ item.button.label }}</NuxtLink
      >
      <button
        v-if="item.subItems && item.subItems.length"
        type="button"
        @click.prevent="toggleSubmenu"
        class="absolute top-0 right-0 p-3"
        :aria-label="visibleChildren ? 'Collapse ' + item.label : 'Expand ' + item.label"
      >
        <UiIcon
          name="interface-arrows-button-down-arrow-down-keyboard"
          :class="{
            'rotate-180': visibleChildren,
          }"
          height="16"
          width="16"
        />
      </button>
    </div>
    <Transition name="slide">
      <nav v-if="item.subItems && item.subItems.length && visibleChildren">
        <NuxtLink
          class="block mt-3 mb-2 flex items-center text-text-xxs py-2 px-3 rounded-md transition duration-300 ease-in-out hover:bg-surface-primaryActive dark:hover:bg-dark-primaryActive hover:font-medium subitem"
          v-slot="{ isActive }"
          v-for="(subItem, index) in item.subItems"
          :key="index"
          :to="subItem.to"
        >
          {{ subItem.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  item: {
    type: Object,
  },
});

const visibleChildren = ref(false);

const toggleSubmenu = () => {
  visibleChildren.value = !visibleChildren.value;
};
</script>
<style lang="css" scoped>
.router-link-active,
.router-link-exact-active {
  @apply rounded-md px-3 py-2 bg-surface-primaryActive font-semibold text-text-primary;
}
.subitem:before {
  content: "";
  @apply h-1 w-1 rounded-full mr-3 inline-block;
}
.subitem:hover:before {
  @apply bg-[#2970FF];
}

/* Slide transition styles */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-20px);
}

.slide-enter-to,
.slide-leave-from {
  max-height: 500px; /* A value large enough to accommodate the content */
  opacity: 1;
  transform: translateY(0);
}
</style>
