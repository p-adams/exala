<template>
  <i :class="iconClassString" @click="emit('onIconClick')" />
</template>
<script setup>
import { computed, defineEmit, defineProps } from "@vue/runtime-core";

const props = defineProps({
  iconClass: String,
});
const emit = defineEmit(["onIconClick"]);

const iconClassString = computed(() => `fas ${props.iconClass}`);
</script>
