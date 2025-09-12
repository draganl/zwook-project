<template>
  <div class="rounded-full w-full" :class="[sizeClass, colorClassTotal]">
    <div
      class="rounded-full w-3/4"
      :class="[sizeClass, colorClassCurrent]"
    ></div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

interface Props {
  color?: "brand" | "neutral";
  size?: "sm" | "md";
}

const props = withDefaults(defineProps<Props>(), {
  color: "orange",
  size: "md",
});

const sizeClass = computed(() => {
  const classes = {
    sm: "h-1",
    md: "h-2",
  };
  return classes[props.size];
});

const colorClassTotal = computed(() => {
  const classes = {
    orange: "bg-[#E3E8EF] dark:bg-surface-primaryActive",
    neutral: "bg-surface-brandActive dark:bg-border-primaryLighter",
  };
  return classes[props.color];
});

const colorClassCurrent = computed(() => {
  const classes = {
    orange: "bg-surface-warning",
    neutral: "bg-text-primary dark:bg-background-primary",
  };
  return classes[props.color];
});
</script>
