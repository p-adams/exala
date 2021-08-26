<template>
  <app-tooltip
    position="top"
    :tooltip-data="dialogContent"
    :displayOn="displayTooltip"
  >
    <app-icon
      :icon-class="dialogIconClass"
      @on-icon-click="emit('toggleDialog')"
    />
  </app-tooltip>
</template>
<script setup>
import AppTooltip from "./AppTooltip.vue";
import AppIcon from "./AppIcon.vue";
import { computed } from "@vue/reactivity";
const props = defineProps({
  open: Boolean,
  dialogContent: {
    type: String,
  },
  dialogIconClass: {
    type: String,
    default: "fa-info-circle",
  },
});
const emit = defineEmits(["toggleDialog"]);
const displayTooltip = computed(() => (props.open ? "click" : ""));
</script>
<style lang="scss" scoped></style>
