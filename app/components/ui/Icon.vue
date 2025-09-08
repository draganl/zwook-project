<template>
  <span class="inline-block" v-html="svgContent" :class="color" />
</template>

<script setup lang="ts">
import { ref, watch, onMounted, withDefaults } from "vue";

interface Props {
  name: string;
  color?: string;
  width?: string;
  height?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "text-current",
  width: "24",
  height: "24",
});

const svgContent = ref("");

const processSvg = (svg: string) => {
  if (!svg) return "";

  let processedSvg = svg.replace(
    /fill="((?!none)[^"]*)"/g,
    'fill="currentColor"',
  );
  processedSvg = processedSvg.replace(
    /stroke="((?!none)[^"]*)"/g,
    'stroke="currentColor"',
  );
  processedSvg = processedSvg.replace(
    /width="[^"]*"/,
    `width="${props.width}"`,
  );
  processedSvg = processedSvg.replace(
    /height="[^"]*"/,
    `height="${props.height}"`,
  );
  if (!/width="[^"]*"/.test(processedSvg)) {
    processedSvg = processedSvg.replace(/<svg/, `<svg width="${props.width}"`);
  }
  if (!/height="[^"]*"/.test(processedSvg)) {
    processedSvg = processedSvg.replace(
      /<svg/,
      `<svg height="${props.height}"`,
    );
  }

  return processedSvg;
};

const fetchSvg = async () => {
  try {
    const svgModule = await import(`~/assets/icons/${props.name}.svg?raw`);
    const rawSvg = svgModule.default;
    svgContent.value = processSvg(rawSvg);
  } catch (e) {
    console.error(`Icon with name "${props.name}" not found.`, e);
    svgContent.value = "";
  }
};

onMounted(fetchSvg);

watch(() => props.name, fetchSvg);
</script>
