<template>
  <span
    class="inline-flex items-center justify-center font-medium rounded-full"
    :class="[badgeVariantClass, badgeSizeClass]"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "filled" | "outline";
  size?: "sm" | "md";
  color?: "neutral" | "brand" | "warning" | "error" | "success";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "filled",
  size: "md",
  color: "neutral",
});

const badgeVariantClass = computed(() => {
  const classes = {
    filled: {
      neutral:
        "bg-surface-secondary text-text-secondary dark:bg-dark-surface-secondary dark:text-dark-text-secondary",
      brand:
        "bg-surface-brand text-text-invert dark:bg-dark-surface-brand dark:text-dark-text-invert",
      warning:
        "bg-surface-warning text-text-warning dark:bg-dark-surface-warning dark:text-dark-text-warning",
      error:
        "bg-surface-error text-text-error dark:bg-dark-surface-error dark:text-dark-text-error",
      success:
        "bg-surface-success text-text-success dark:bg-dark-surface-success dark:text-dark-text-success",
    },
    outline: {
      neutral:
        "border border-border-primary text-text-secondary dark:border-dark-border-primary dark:text-dark-text-secondary",
      brand:
        "border border-border-brand text-text-brand dark:border-dark-border-brand dark:text-dark-text-brand",
      warning:
        "border border-surface-warning text-text-warning dark:border-dark-surface-warning dark:text-dark-text-warning",
      error:
        "border border-surface-error text-text-error dark:border-dark-surface-error dark:text-dark-text-error",
      success:
        "border border-surface-success text-text-success dark:border-dark-surface-success dark:text-dark-text-success",
    },
  };
  return classes[props.variant][props.color];
});

const badgeSizeClass = computed(() => {
  const classes = {
    sm: "px-2 py-1 text-text-xxs",
    md: "px-3 py-1 text-text-xs",
  };
  return classes[props.size];
});
</script>
