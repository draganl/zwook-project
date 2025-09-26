<template>
  <component
    :is="iconComponent"
    :class="color"
    :width="width"
    :height="height"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { computed, withDefaults } from 'vue';
import { useIcon } from '~/composables/useIcon';

interface Props {
  name: string;
  color?: string;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'text-current',
  width: '24',
  height: '24',
});

const iconComponent = computed(() => useIcon(props.name));
</script>