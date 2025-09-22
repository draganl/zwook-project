<template>
  <div class="flex flex-col space-y-2">
    <div class="flex items-center justify-between">
      <label
        v-if="label"
        class="text-text-sm text-text-primary dark:text-dark-text-primary mb-1"
      >
        {{ label }}
      </label>
      <span
        v-if="badge"
        class="inline-flex items-center px-2 py-1 text-text-xs font-semibold leading-none text-text-secondary rounded-full bg-surface-primary dark:bg-dark-background-secondary dark:text-dark-text-secondary"
      >
        {{ badge }}
      </span>
    </div>

    <div class="relative">
      <UiIcon
        v-if="icon"
        :name="icon"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary dark:text-dark-text-secondary"
      />
      <textarea
        v-if="textarea"
        class="w-full bg-surface-primary h-[150px] text-text-sm text-text-primary rounded-lg outline-none dark:text-dark-text-primary dark:bg-dark-surface-primary border p-3"
        :class="{
          'border-error focus:border-error dark:border-dark-border-error dark:focus:border-dark-border-error':
            validationText,
          'border-border-primary dark:border-dark-border-primary focus:border-brand-blue dark:focus:border-dark-brand':
            !validationText,
          'pl-9': icon,
          'px-4': !icon,
        }"
        :placeholder="placeholder"
      ></textarea>
      <input
        v-else
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        class="w-full bg-surface-primary h-11 text-text-sm text-text-primary rounded-lg outline-none dark:text-dark-text-primary dark:bg-dark-surface-primary border px-3"
        :class="{
          'border-error focus:border-error dark:border-dark-border-error dark:focus:border-dark-border-error':
            validationText,
          'border-border-primary dark:border-dark-border-primary focus:border-brand-blue dark:focus:border-dark-brand':
            !validationText,
          'pl-9': icon,
          'px-4': !icon,
        }"
      />
    </div>

    <span
      v-if="validationText"
      class="text-text-xs text-text-error dark:text-dark-text-error"
    >
      <UiIcon
        name="interface-alert-warning-circle-warning-alert-frame-exclamation-caution-circle"
        class="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary dark:text-dark-text-secondary"
      />
      {{ validationText }}
    </span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  validationText: {
    type: String,
    default: "",
  },
  textarea: {
    type: Boolean,
    default: false,
  },
  badge: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue"]);
</script>
