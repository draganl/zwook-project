<template>
  <article
    class="relative h-[180px] w-[308px] rounded-md overflow-hidden inline-block"
  >
    <figure class="h-full w-full">
      <img
        :src="card.image"
        :alt="card.title"
        class="object-cover h-full w-full"
      />
    </figure>
    <NuxtLink class="absolute inset-0 z-10" :to="card.to" />
    <div
      class="absolute top-3 right-2.5 bg-[#413F3A]/[0.8] px-2 py-1 rounded-full flex items-center"
      :class="
        card.tag === 'Online' ? 'text-surface-success' : 'text-surface-error'
      "
    >
      <span
        class="inline-block h-3 w-3 rounded-full mr-1"
        :class="
          card.tag === 'Online' ? 'bg-surface-success' : 'bg-surface-error'
        "
      />
      {{ card.tag }}
    </div>
    <div
      class="absolute bottom-0 inset-x-0 flex items-center justify-between text-surface-primary p-3 h-11 bg-text-primary/[0.6]"
    >
      <h4 class="font-medium text-text-sm">{{ card.title }}</h4>
      <UiBadge
        v-if="card.badge"
        variant="filled"
        size="sm"
        color="brand"
        class="font-semibold text-text-sm"
        >{{ card.badge }}</UiBadge
      >
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  card: {
    type: Object,
  },
});
</script>
