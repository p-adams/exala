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
  cursor: pointer;
  display: grid;
  border: 1px solid lightgray;
  border-radius: 2px;
  height: 100%;
}
.content-card-container:hover {
  border: 1px solid lightskyblue;
  box-shadow: 5px 3px 3px lightgray;
}
header {
  color: slategray;
  text-transform: capitalize;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  box-shadow: 2px 2px 2px lightgray;
  height: 25%;
  font-weight: bold;
}
</style>
