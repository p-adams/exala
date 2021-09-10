<template>
  <div :class="tooltipClass">
    <slot />
  </div>
</template>
<script setup>
import { computed, defineProps } from "@vue/runtime-core";

const props = defineProps({
  position: String,
  displayOn: {
    type: String,
    default: "hover",
  },
});
const tooltipClass = computed(
  () =>
    `app-tooltip ${
      props.displayOn === "click"
        ? "displayClick"
        : props.displayOn === "hover"
        ? "displayHover"
        : ""
    } ${props.position}`
);
</script>
<style lang="scss" scoped>
.app-tooltip {
  position: relative;
  text-align: center;
  .cancel {
    position: absolute;
  }
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
  &.displayClick::after {
    display: block;
  }
  &.displayClick::before {
    display: block;
  }
  &.displayHover:hover::after {
    display: block;
  }
  &.displayHover:hover::before {
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
