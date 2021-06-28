<template>
  <div class="types-container">
    <div class="type">
      <h4>light</h4>
    </div>
    <div class="type">
      <h4>medium</h4>
    </div>
    <div class="type">
      <h4>heavy</h4>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.types-container {
  grid-template-columns: auto auto auto;
}
.type {
  color: slategray;
  border: 1px solid lightgray;
  border-radius: 2px;
}
</style>
