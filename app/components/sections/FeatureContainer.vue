<template>
  <section class="py-7 px-9">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <MoleculesFeatureCard
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const cards = ref([
  {
    title: "Midnight Melodies",
    description: "New release “Impressions” coming June,16",
    to: "#",
    image: "/images/abstract-image-1.jpg",
  },
  {
    title: "Virgos",
    description: "New release “Impressions” coming July,29",
    to: "#",
    image: "/images/abstract-image-2.jpg",
  },
]);
</script>
