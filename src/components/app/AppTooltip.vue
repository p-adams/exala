<template>
  <span>
    <slot />
  </span>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const show = ref(false);
    function toggleShow() {
      console.log("meow");
      show.value = !show;
    }
    return {
      show,
      toggleShow,
    };
  },
};
</script>
<style scoped>
.app-tooltip {
  border: 1px solid lightgray;
  border-radius: 2px;
}
</style>
