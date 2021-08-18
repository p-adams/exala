<template>
  <div class="dialog-container">dialog</div>
</template>
<script setup>
const props = defineProps({
  open: Boolean,
  onClose: () => {},
});
</script>
<style lang="scss" scoped>
.dialog-container {
}
</style>
