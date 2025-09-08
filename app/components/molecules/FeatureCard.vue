<template>
  <article class="relative h-[300px] rounded-md overflow-hidden">
    <figure class="h-full w-full">
      <img
        :src="card.image"
        :alt="card.title"
        class="object-cover h-full w-full"
      />
    </figure>
    <div class="absolute bottom-5 left-5 text-surface-primary">
      <NuxtLink :to="card.to">
        <UiIcon
          height="32"
          width="32"
          name="interface-arrows-corner-up-right-keyboard-top-arrow-right-up"
          class="mb-4 text-display-sm"
        ></UiIcon>
      </NuxtLink>
      <h4 class="font-medium text-display-md">{{ card.title }}</h4>
      <p class="font-semibold text-text-sm">{{ card.description }}</p>
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
