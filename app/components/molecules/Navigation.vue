<template>
  <nav class="mb-6 overflow-auto">
    <uiNavigationItem
      v-for="(item, index) in navigation"
      :key="index"
      :item="item"
    >
    </uiNavigationItem>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const navigation = ref([
  {
    label: "Home",
    icon: "home-2",
    to: "/",
  },
  {
    label: "Devices",
    icon: "computer-laptop-device-laptop-electronics-computer-notebook",
    to: "/devices",
    button: {
      label: "10",
      to: "#",
    },
  },
  {
    label: "Subscriptions",
    icon: "image-flash-2-flash-power-connect-charge-electricity-lightning",
    to: "/subscriptions",
  },
  {
    label: "Settings",
    icon: "settings-1",
    to: "/settings",
    subItems: [
      {
        label: "Subnavigation 1",
        to: "/settings/sub1",
      },
      {
        label: "Subnavigation 2",
        to: "/settings/sub2",
      },
      {
        label: "Subnavigation 3",
        to: "/settings/sub3",
      },
      {
        label: "Subnavigation 4",
        to: "/settings/sub4",
      },
      {
        label: "Subnavigation 5",
        to: "/settings/sub5",
      },
      {
        label: "Subnavigation 6",
        to: "/settings/sub6",
      },
      {
        label: "Subnavigation 7",
        to: "/settings/sub7",
      },
    ],
  },
  {
    label: "Playlists",
    icon: "entertainment-music-note-2-music-audio-note",
    to: "/playlists",
  },
  {
    label: "Albums",
    icon: "entertainment-control-button-record-1-button-multimedia-multi-media-controls-record-circle",
    to: "/albums",
  },
  {
    label: "Artists",
    icon: "user-note",
    to: "/artists",
  },
  {
    label: "Stations",
    icon: "station",
    to: "/stations",
  },
  {
    label: "Podcasts",
    icon: "microphone",
    to: "/podcasts",
    button: {
      label: "Add New",
      to: "/podcasts/add-new",
    },
  },
]);
</script>
