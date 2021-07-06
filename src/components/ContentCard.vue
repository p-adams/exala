<template>
  <div class="content-card-container">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="content" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
.content-card-container {
  border: 1px solid lightgray;
  border-radius: 2px;
  height: 100%;
}
</style>
