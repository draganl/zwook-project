<template>
  <component
    :is="to ? 'NuxtLink' : 'button'"
    :to="to"
    :type="to ? null : type"
    :class="[
      'inline-flex items-center justify-center cursor-pointer rounded-md transition duration-200 ease-in-out',
      variantClass,
      sizeClass,
    ]"
  >
    <UiIcon
      v-if="iconLeft"
      :name="iconLeft"
      class="mr-2"
      :class="iconSizeClass"
    />
    <span><slot /></span>
    <UiIcon
      v-if="iconRight"
      :name="iconRight"
      class="ml-2"
      :class="iconSizeClass"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "filled" | "outline" | "empty";
  color?: "brand" | "neutral" | "warning" | "error" | "success";
  size?: "sm" | "md" | "lg";
  iconLeft?: string;
  iconRight?: string;
  to?: string;
  type?: "button" | "submit" | "reset";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "filled",
  color: "brand",
  size: "md",
  iconLeft: "",
  iconRight: "",
  to: "",
  type: "button",
});

const variantClass = computed(() => {
  const classes = {
    filled: {
      brand:
        "bg-surface-brand text-text-invert hover:bg-surface-brandHover dark:bg-dark-surface-brand dark:hover:bg-dark-surface-brandHover dark:text-dark-text-invert",
      neutral:
        "bg-surface-secondary text-text-primary hover:bg-surface-primaryActive dark:bg-dark-surface-secondary dark:hover:bg-dark-surface-primaryActive dark:text-dark-text-primary",
      warning:
        "bg-surface-warning text-text-primary hover:bg-surface-warningLight dark:bg-dark-surface-warning dark:hover:bg-dark-surface-warningLight",
      error:
        "bg-surface-error text-text-invert hover:bg-surface-errorHover dark:bg-dark-surface-error dark:hover:bg-dark-surface-errorHover dark:text-dark-text-invert",
      success:
        "bg-surface-success text-text-invert hover:bg-surface-successHover dark:bg-dark-surface-success dark:hover:bg-dark-surface-successHover dark:text-dark-text-invert",
    },
    outline: {
      brand:
        "border border-border-brand text-text-brand hover:bg-surface-brandActive dark:border-dark-border-brand dark:text-dark-text-brand dark:hover:bg-dark-surface-brandActive",
      neutral:
        "border border-border-primary text-text-primary hover:bg-surface-primaryActive dark:border-dark-border-primary dark:text-dark-text-primary dark:hover:bg-dark-surface-primaryActive",
      warning:
        "border border-border-brand text-text-brand hover:bg-surface-brandActive dark:border-dark-border-brand dark:text-dark-text-brand dark:hover:bg-dark-surface-brandActive",
      error:
        "border border-border-error text-text-error hover:bg-surface-errorActive dark:border-dark-border-error dark:text-dark-text-error dark:hover:bg-dark-surface-errorActive",
      success:
        "border border-border-success text-text-success hover:bg-surface-successActive dark:border-dark-border-success dark:text-dark-text-success dark:hover:bg-dark-surface-successActive",
    },
    empty: {
      brand: "text-text-brand hover:bg-surface-brandActive",
      neutral: "text-text-primary hover:bg-surface-primaryActive",
      warning: "text-text-warning hover:bg-surface-warningLight",
      error: "text-text-error hover:bg-surface-errorActive",
      success: "text-text-success hover:bg-surface-successActive",
    },
  };
  return classes[props.variant][props.color];
});

const sizeClass = computed(() => {
  const classes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 h-9 text-md",
    lg: "px-4 py-2.5 text-lg",
  };
  return classes[props.size];
});

const iconSizeClass = computed(() => {
  const classes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };
  return classes[props.size];
});
</script>
