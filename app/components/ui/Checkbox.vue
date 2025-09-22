<template>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="hidden"
    />
    <span
      class="w-5 h-5 border-2 rounded-md flex items-center justify-center transition duration-300 ease-out"
      :class="{
        'bg-brand-blue border-brand-blue': modelValue,
        'bg-surface-primary hover:bg-surface-brand-active hover:border-border-brand border-border-primary dark:border-dark-border-primary':
          !modelValue,
      }"
    >
      <UiIcon v-if="modelValue" name="check" width="8" height="8" />
    </span>
    <span
      v-if="label"
      class="ml-2 text-text-sm text-text-primary dark:text-dark-text-primary"
      >{{ label }}</span
    >
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
