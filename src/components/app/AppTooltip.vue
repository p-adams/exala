<template>
  <span :class="tooltipClass" @click="toggleShow()">
    <slot />
  </span>
</template>
<script setup>
import { computed, defineProps } from "@vue/runtime-core";

const props = defineProps({ position: String, show: Boolean });
const tooltipClass = computed(
  () => `app-tooltip ${props.position} ${props.show ? "show" : ""}`
);
function toggleShow() {
  console.log("show");
}
</script>
<style lang="scss" scoped>
.app-tooltip {
  position: relative;
  text-align: center;
  &::after {
    background-color: steelblue;
    color: whitesmoke;
    padding: 10px 15px;
    position: absolute;
    display: none;
    text-align: center;
    z-index: 999;
    border-radius: 4px;
  }
  &::before {
    background-color: steelblue;
    content: "";
    display: none;
    position: absolute;
    width: 15px;
    height: 15px;
    z-index: 999;
  }
  &.show::after {
    display: block;
  }
  &.show::before {
    display: block;
  }
  &:hover::after {
    display: block;
  }
  &:hover::before {
    display: block;
  }
  &.top {
    &::before {
      top: 0;
      left: 50%;
      transform: translate(-50%, calc(-100% - 5px)) rotate(45deg);
    }
    &::after {
      content: attr(tooltip-data);
      top: 0;
      left: 50%;
      transform: translate(-50%, calc(-100% - 10px));
    }
  }

  &.bottom {
    &::before {
      bottom: 0;
      left: 50%;
      transform: translate(-50%, calc(100% + 5px)) rotate(45deg);
    }
    &::after {
      content: attr(tooltip-data);
      bottom: 0;
      left: 50%;
      transform: translate(-50%, calc(100% + 10px));
    }
  }
  &.right {
    &::before {
      top: 50%;
      right: 0;
      transform: translate(calc(100% + 5px), -50%) rotate(45deg);
    }
    &::after {
      content: attr(tooltip-data);
      top: 0;
      right: 0;
      transform: translateX(calc(100% + 10px));
    }
  }
  &.left {
    &::before {
      top: 50%;
      left: 0;
      transform: translate(calc(-100% - 5px), -50%) rotate(45deg);
    }
    &::after {
      content: attr(tooltip-data);
      top: 0;
      left: 0;
      transform: translateX(calc(-100% - 10px));
    }
  }
}
</style>
