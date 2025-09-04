<template>
  <NuxtLink
    v-slot="{ isActive }"
    :to="item.to"
    class="mb-4 px-3 py-2 flex text-[#4B5565] items-center rounded-md transition-all duration-300 ease-in-out hover:bg-surface-primaryActive dark:bg-dark-primaryActive"
    :class="{
      'bg-surface-primaryActive text-text-primary font-semibold': isActive,
    }"
  >
    <UiIcon :name="item.icon" class="mr-3" />
    <span class="flex-1">{{ item.label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  item: {
    type: Object,
  },
});
</script>
