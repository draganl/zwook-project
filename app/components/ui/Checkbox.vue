<template>
  <label
    :for="id"
    class="flex items-center cursor-pointer rounded-md p-1 focus-within:ring-2 focus-within:ring-brand-blue/30"
  >
    <input
      :id="id"
      :name="name"
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="hidden"
    />
    <span
      class="w-5 h-5 border-2 rounded-md flex items-center justify-center transition-colors"
      :class="{
        'bg-brand-blue border-brand-blue': modelValue,
        'bg-transparent border-border-primary dark:border-dark-border-primary': !modelValue,
      }"
    >
      <UiIcon v-if="modelValue" name="check" class="text-white" width="12" height="12" />
    </span>
    <span v-if="label" class="ml-2 text-text-sm text-text-primary dark:text-dark-text-primary">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  name: string;
  label?: string;
  modelValue?: boolean;
}

defineProps<Props>();

defineEmits(["update:modelValue"]);
</script>