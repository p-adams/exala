<template>
  <div class="content-card-container">
    <header>
      <div class="header-text">
        <slot name="header" />
      </div>
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
<style scoped lang="scss">
.content-card-container {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 2px;
  height: 100%;
  min-width: 400px;
  header {
    color: slategray;
    text-transform: capitalize;
    border-bottom: 1px solid lightgray;
    box-shadow: 2px 2px 2px lightgray;
    height: 25%;
    font-weight: bold;
    width: 100%;
    .header-text {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  main {
    text-align: left;
    width: 100%;
  }
  &:hover {
    border: 1px solid lightskyblue;
    box-shadow: 5px 3px 3px lightgray;
  }
}
</style>
