<template>
  <label class="flex items-center cursor-pointer">
    <input
      type="radio"
      :name="name"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
      class="hidden"
    />
    <span
      class="w-5 h-5 border-2 rounded-full flex items-center justify-center transition-colors"
      :class="{
        'border-brand-blue': modelValue === value,
        'border-border-primary dark:border-dark-border-primary': modelValue !== value,
      }"
    >
      <span
        v-if="modelValue === value"
        class="w-2.5 h-2.5 bg-brand-blue rounded-full"
      ></span>
    </span>
    <span v-if="label" class="ml-2 text-text-sm text-text-primary dark:text-dark-text-primary">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
interface Props {
  label?: string;
  modelValue?: string | number;
  value?: string | number;
  name?: string;
}

defineProps<Props>();

defineEmits(["update:modelValue"]);
</script>
