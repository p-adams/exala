<template>
  <i :class="iconClassString" @click="emit('onIconClick')"></i>
</template>
<script setup>
import { computed, defineProps } from "@vue/runtime-core";

const props = defineProps({
  iconClass: String,
});
const emit = defineEmits(["onIconClick"]);

const iconClassString = computed(() => `fas ${props.iconClass}`);
</script>
