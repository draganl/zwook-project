<template>
  <section class="my-8 mx-9">
    <div class="mb-5 flex align items justify-between">
      <h6 class="font-semibold text-l">Featured</h6>
      <div>
        <UiButton
          class="mr-2"
          variant="filled"
          color="dark"
          size="md"
          to="/featured"
          >All</UiButton
        >
        <UiButton
          class="mr-2"
          variant="outline"
          color="neutral"
          size="md"
          to="/featured"
          >Premium</UiButton
        >
        <UiButton variant="outline" color="neutral" size="md" to="/featured"
          >Disabled</UiButton
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
    title: "Kiss Dorka",
    to: "#",
    image: "/images/album-image-21.jpg",
  },
  {
    title: "Luna Nova",
    to: "#",
    image: "/images/album-image-2.jpg",
  },
  {
    title: "Phantom Echos",
    to: "#",
    image: "/images/album-image-3.jpg",
  },
  {
    title: "Kiss Dorka",
    to: "#",
    image: "/images/album-image-4.jpg",
  },
  {
    title: "Max Sterling",
    to: "#",
    image: "/images/album-image-5.jpg",
  },
  {
    title: "Orion Starlight",
    to: "#",
    image: "/images/album-image-6.jpg",
  },
  {
    title: "Kiss Dorka",
    to: "#",
    image: "/images/album-image-7.jpg",
  },
  {
    title: "Phantom Echos",
    to: "#",
    image: "/images/album-image-8.jpg",
  },
]);
</script>
