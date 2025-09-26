<template>
  <div
    class="flex items-center p-4 border rounded-lg"
    :class="{
      'border-border-primary dark:border-dark-border-primary': status === 'complete',
      'border-border-primary dark:border-dark-border-primary': status === 'uploading',
      'border-error dark:border-dark-border-error': status === 'error',
    }"
  >
    <div class="flex-shrink-0 mr-4">
      <div
        class="w-12 h-12 flex items-center justify-center rounded-lg bg-surface-secondary dark:bg-dark-surface-secondary"
      >
        <span class="font-bold text-text-md text-text-primary dark:text-dark-text-primary">{{
          file.type.toUpperCase()
        }}</span>
      </div>
    </div>
    <div class="flex-grow">
      <p class="text-text-sm font-medium text-text-primary dark:text-dark-text-primary">
        {{ file.name }}
      </p>
      <p class="text-text-xs text-text-secondary dark:text-dark-text-secondary">
        {{ file.size }}
      </p>
      <div v-if="status === 'uploading'" class="flex items-center mt-1">
        <div class="w-full bg-surface-secondary rounded-full h-1.5 dark:bg-dark-surface-secondary mr-2">
          <div
            class="bg-brand-blue h-1.5 rounded-full"
            :style="{ width: file.progress + '%' }"
          ></div>
        </div>
        <span class="text-text-xs text-text-secondary dark:text-dark-text-secondary"
          >{{ file.progress }}%</span
        >
      </div>
      <p v-if="status === 'error'" class="text-text-xs text-error dark:text-dark-text-error mt-1">
        Try Again
      </p>
    </div>
    <div class="ml-4">
      <button type="button" :aria-label="'Remove ' + file.name">
        <UiIcon name="delete-1" class="text-text-secondary dark:text-dark-text-secondary" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface File {
  name: string;
  size: string;
  type: string;
  progress?: number;
}

interface Props {
  file: File;
  status: 'uploading' | 'error' | 'complete';
}

const props = defineProps<Props>();
</script>
