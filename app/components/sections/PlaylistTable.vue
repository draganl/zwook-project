<template>
  <table class="w-full text-left table-auto">
    <thead>
      <tr>
        <th
          class="p-4 border-b border-border-primary dark:border-dark-border-primary font-semibold text-[#4B5565] dark:text-dark-text-secondary text-text-xs"
        >
          #
        </th>
        <th
          class="p-4 border-b border-border-primary dark:border-dark-border-primary font-semibold text-[#4B5565] dark:text-dark-text-secondary text-text-xs"
        >
          Title
        </th>
        <th
          class="p-4 font-semibold text-[#4B5565] dark:text-dark-text-secondary border-b border-border-primary dark:border-dark-border-primary text-text-xs"
        >
          Album
        </th>
        <th
          class="p-4 font-semibold border-b border-border-primary dark:border-dark-border-primary text-[#4B5565] dark:text-dark-text-secondary text-text-xs"
        >
          Date Added
        </th>
        <th
          class="p-4 font-semibold text-[#4B5565] dark:text-dark-text-secondary text-text-xs border-b border-border-primary dark:border-dark-border-primary"
        >
          Song Time
        </th>
      </tr>
    </thead>
    <tbody>
      <UiTableRow
        v-for="(song, index) in songs"
        :key="index"
        :index="index"
        :song="song"
      />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from "vue";

const songs = ref([
  {
    title: "Lost in the Echoes",
    artist: "The Wanderers",
    album: "Shadows of the Past",
    date_added: "03/03/2024",
    song_time: "3:03",
    image: "/images/Image.jpg",
  },
  {
    title: "Luna Waves",
    artist: "Midnight Mirage",
    album: "Dreamscapes",
    date_added: "04/17/2024",
    song_time: "5:22",
    image: "/images/Image-1.jpg",
  },
  {
    title: "Velvet Strings",
    artist: "Heartfelt Harmony",
    album: "Serenade of the Soul",
    date_added: "04/17/2024",
    song_time: "3:46",
    image: "/images/Image-2.jpg",
  },
  {
    title: "The Electric Suns",
    artist: "Solar Flare",
    album: "Galactic Journey",
    date_added: "04/17/2024",
    song_time: "1:55",
    image: "/images/Image-3.jpg",
  },
  {
    title: "Sapphire Sky",
    artist: "Crystal Clear",
    album: "Celestial Dreams",
    date_added: "04/17/2024",
    song_time: "2:40",
    image: "/images/Image-4.jpg",
  },
  {
    title: "Mystic Moon",
    artist: "Enchanted Night",
    album: "Twilight Whispers",
    date_added: "04/17/2024",
    song_time: "2:38",
    image: "/images/Image-5.jpg",
  },
  {
    title: "Aurora Echo",
    artist: "Northern Lights",
    album: "Aurora Borealis",
    date_added: "04/17/2024",
    song_time: "4:15",
    image: "/images/Image-6.jpg",
  },
  {
    title: "The Rhythm Riders",
    artist: "Pulse of the City",
    album: "Urban Beats",
    date_added: "04/17/2024",
    song_time: "3:28",
    image: "/images/Image-7.jpg",
  },
  {
    title: "Crimson Tide",
    artist: "Deep Sea Symphony",
    album: "Oceanic Reverie",
    date_added: "04/17/2024",
    song_time: "4:45",
    image: "/images/Image-8.jpg",
  },
  {
    title: "Golden Horizon",
    artist: "Sunset Serenade",
    album: "Dusk to Dawn",
    date_added: "04/17/2024",
    song_time: "6:45",
    image: "/images/Image-9.jpg",
  },
  {
    title: "Silver Strings",
    artist: "Moonlit Melody",
    album: "Forevermore",
    date_added: "04/17/2024",
    song_time: "4:15",
    image: "/images/Image-10.jpg",
  },
  {
    title: "Echoes of Eternity",
    artist: "Timeless Tune",
    album: "Groovy Nights",
    date_added: "04/17/2024",
    song_time: "4:15",
    image: "/images/Image-11.jpg",
  },
]);
</script>
