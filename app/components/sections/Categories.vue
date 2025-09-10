<template>
  <section class="my-8 mx-9">
    <div class="mb-5 flex align items justify-between">
      <h6 class="font-semibold text-l">Featured</h6>
      <div>
        <UiButton variant="outline" color="neutral" size="md" to="/featured"
          >View All</UiButton
        >
      </div>
    </div>
    <div class="gap-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
      <MoleculesAlbumCard
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
    title: "Balla Daniella",
    to: "#",
    image: "/images/album-image-9.jpg",
  },
  {
    title: "Luna Nova",
    to: "#",
    image: "/images/album-image-10.jpg",
  },
  {
    title: "Komodo Dragon",
    to: "#",
    image: "/images/album-image-11.jpg",
  },
  {
    title: "Kiss Dorka",
    to: "#",
    image: "/images/album-image-12.jpg",
  },
  {
    title: "Max Sterling",
    to: "#",
    image: "/images/album-image-13.jpg",
  },
  {
    title: "Orion Starlight",
    to: "#",
    image: "/images/album-image-14.jpg",
  },
  {
    title: "Kiss Dorka",
    to: "#",
    image: "/images/album-image-15.jpg",
  },
  {
    title: "Phantom Echos",
    to: "#",
    image: "/images/album-image-16.jpg",
  },
]);
</script>
