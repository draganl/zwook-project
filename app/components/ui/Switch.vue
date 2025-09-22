<template>
  <label class="flex items-center cursor-pointer">
    <div class="relative">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
        class="hidden"
      />
      <div
        class="w-10 h-5 rounded-full transition-colors"
        :class="{
          'bg-brand-blue': modelValue,
          'bg-border-primary dark:bg-dark-border-primary': !modelValue,
        }"
      ></div>
      <div
        class="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform"
        :class="{ 'transform translate-x-5': modelValue }"
      ></div>
    </div>
    <span v-if="label" class="ml-2 text-text-sm text-text-primary dark:text-dark-text-primary">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  modelValue?: boolean;
}

defineProps<Props>();

defineEmits(["update:modelValue"]);
</script>
