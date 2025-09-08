<template>
  <section class="pt-3 pb-8">
    <div class="px-9 mb-5 flex align items justify-between">
      <h6 class="font-semibold text-l">Podcasts</h6>
      <UiButton variant="outline" color="neutral" size="md" to="/podcasts"
        >View all</UiButton
      >
    </div>
    <div class="overflow-auto ml-9">
      <div class="flex gap-6 min-w-[1636px]">
        <MoleculesPodcastCard
          v-for="(card, index) in cards"
          :key="index"
          :card="card"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from "vue";

const cards = ref([
  {
    title: "Mind Matters",
    tag: "Online",
    badge: "Premium",
    to: "#",
    image: "/images/album-image-17.jpg",
  },
  {
    title: "Tech Talk",
    tag: "Offline",
    badge: "Premium",
    to: "#",
    image: "/images/album-image-18.jpg",
  },
  {
    title: "History Quest",
    tag: "Online",
    badge: "Premium",
    to: "#",
    image: "/images/album-image-19.jpg",
  },
  {
    title: "Mystery Junction",
    tag: "Online",
    badge: "Premium",
    to: "#",
    image: "/images/album-image-20.jpg",
  },
  {
    title: "Creative Minds",
    tag: "Offline",
    badge: "Premium",
    to: "#",
    image: "/images/album-image-1.jpg",
  },
]);
</script>
