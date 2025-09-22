<template>
  <div class="space-y-5">
    <div
      class="border border-border-primary dark:border-dark-border-primary h-full flex items-center cursor-pointer hover:border-border-brand rounded-2xl p-6 text-center"
      @dragover.prevent
      @drop.prevent="handleDrop"
      :class="{ 'border-brand-blue dark:border-dark-brand': isDragging }"
      @dragenter="isDragging = true"
      @dragleave="isDragging = false"
    >
      <div class="w-full">
        <div class="flex justify-center mb-4">
          <div
            class="w-8 h-8 flex items-center justify-center rounded mb-3 border border-border-primary dark:border-dark-border-primary"
          >
            <UiIcon
              name="cloud-upload"
              class="text-text-primary dark:text-dark-text-secondary"
            />
          </div>
        </div>
        <p class="text-text-sm text-text-primary dark:text-dark-text-primary">
          <span class="text-text-brand font-medium cursor-pointer"
            >Click to upload</span
          >
          or drag and drop
        </p>
        <p
          class="text-text-xs text-[#4B5565] dark:text-dark-text-secondary mt-1"
        >
          SVG, PNG, JPEG, TIFF or GIF
        </p>
      </div>
    </div>
    <UiButton class="w-full" variant="filled" color="warning"
      >Upload image</UiButton
    >

    <div class="space-y-4">
      <MoleculesFileItem
        v-for="(file, index) in files"
        :key="index"
        :file="file"
        :status="file.status"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface File {
  name: string;
  size: string;
  type: string;
  progress?: number;
  status: "uploading" | "error" | "complete";
}

const isDragging = ref(false);

const files = ref<File[]>([
  /* {
    name: "file_name.pdf",
    size: "16 MB",
    type: "pdf",
    status: "complete",
  },
  {
    name: "file_name.pdf",
    size: "16 MB",
    type: "pdf",
    progress: 30,
    status: "uploading",
  },
  {
    name: "file_name.pdf",
    size: "16 MB",
    type: "pdf",
    status: "error",
  }, */
]);

const handleDrop = (event: DragEvent) => {
  isDragging.value = false;
  const droppedFiles = event.dataTransfer?.files;
  if (droppedFiles) {
    for (let i = 0; i < droppedFiles.length; i++) {
      const file = droppedFiles[i];
      files.value.push({
        name: file.name,
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        type: file.name.split(".").pop() || "",
        status: "uploading",
        progress: 0,
      });
    }
  }
};
</script>
