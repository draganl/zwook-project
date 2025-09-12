<template>
  <article
    class="relative rounded p-3 overflow-hidden bg-surface-primary dark:bg-surface-primary"
  >
    <figure class="rounded overflow-hidden mb-2 aspect-square">
      <img
        :src="card.image"
        :alt="card.title"
        class="object-cover h-full w-full"
      />
    </figure>
    <NuxtLink :to="card.to" class="absolute inset-0 block z-10"> </NuxtLink>
    <h4
      class="font-medium text-text-sm text-text-primary dark:text-dark-text-primary"
    >
      {{ card.title }}
    </h4>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  card: {
    type: Object,
  },
});
</script>
