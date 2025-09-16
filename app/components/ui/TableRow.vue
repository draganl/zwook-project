<template>
  <tr class="text-text-primary dark:text-dark-text-primary">
    <td class="py-1 px-4">
      {{ index + 1 }}
    </td>
    <td class="py-1 px-4 relative">
      <div class="flex items-center">
        <figure
          class="mr-2 grow-0 h-10 w-10 border border-border-primary dark:border-dark-primary overflow-hidden rounded-sm"
        >
          <img
            :src="song.image"
            :alt="song.title"
            class="object-cover h-full w-full"
          />
        </figure>
        <div class="grow-1">
          {{ song.title }}
          <p
            v-if="song.artist"
            class="text-text-primaryPlaceholder dark:text-dark-text-primaryPlaceholder text-text-xs"
          >
            {{ song.artist }}
          </p>
        </div>
      </div>
    </td>
    <td class="py-1 px-4 text-text-sm">{{ song.album }}</td>
    <td class="py-1 px-4 text-text-sm">
      {{ song.date_added }}
    </td>
    <td class="py-1 px-4 text-text-sm">
      {{ song.song_time }}
    </td>
  </tr>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  song: {
    type: Object,
    required: true,
  },
});
</script>
