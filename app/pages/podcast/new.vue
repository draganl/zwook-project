<template>
  <form class="p-6 lg:p-9">
    <div class="md:flex justify-between w-full mb-5 lg:mb-9">
      <h1
        class="font-medium text-text-primary dark:text-dark-text-primary text-display-sm"
      >
        Create New Podcast
      </h1>

      <div class="ml-6">
        <UiButton variant="outline" color="neutral" class="mr-3"
          >Cancel</UiButton
        >
        <UiButton type="submit" variant="filled" color="warning">Save</UiButton>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div
        class="lg:col-span-2 p-6 bg-surface-primary rounded-2xl border border-dark-border-primaryLighter dark:border-dark-border-primaryLighter dark:bg-dark-background-secondary"
      >
        <UiInput class="mb-5" label="Title" placeholder="Enter station title" />
        <UiInput
          class="mb-5"
          label="Description link"
          placeholder="Enter website URL"
        />
        <UiInput
          class="mb-5"
          label="Description"
          placeholder="Enter station description"
          :textarea="true"
        />

        <UiCheckbox class="mb-5" id="staus" label="Status" v-model="isStatus" />
        <UiCheckbox
          class="mb-5"
          id="premium"
          label="Premium"
          v-model="isPremium"
        />
        <UiCheckbox
          class="mb-5"
          id="default"
          label="Make Default"
          v-model="isDefault"
        />
        <UiCheckbox label="Visible on the Portal" v-model="isVisible" />
      </div>

      <div
        class="lg:col-span-1 p-6 bg-surface-primary rounded-2xl border border-dark-border-primaryLighter dark:border-dark-border-primaryLighter dark:bg-dark-background-secondary"
      >
        <OrganismsFileUpload class="h-[447px]" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isStatus = ref(true);
const isPremium = ref(false);
const isDefault = ref(false);
const isVisible = ref(true);
</script>
