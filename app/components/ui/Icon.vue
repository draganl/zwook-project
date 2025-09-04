<template>
  <span class="inline-block" v-html="svgContent" :class="color" />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "text-current",
  },
});

const svgContent = ref("");

const processSvg = (svg) => {
  if (!svg) return "";

  let processedSvg = svg.replace(
    /fill="((?!none)[^"]*)"/g,
    'fill="currentColor"',
  );
  processedSvg = processedSvg.replace(
    /stroke="((?!none)[^"]*)"/g,
    'stroke="currentColor"',
  );

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
