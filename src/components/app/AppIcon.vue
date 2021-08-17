<template>
  <i :class="iconClassString" @click="emit('onIconClick')" />
</template>
<script setup>
import { computed, defineEmits, defineProps } from "@vue/runtime-core";

const props = defineProps({
  iconClass: String,
});
const emit = defineEmits(["onIconClick"]);

const iconClassString = computed(() => `fas ${props.iconClass}`);
</script>
