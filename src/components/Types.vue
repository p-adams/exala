<template>
  <div class="types-container">
    <div class="type">
      <content-card>
        <template v-slot:header>
          <h4>light</h4>
        </template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <h4>medium</h4>
        </template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <h4>heavy</h4>
        </template>
      </content-card>
    </div>
  </div>
</template>

<script>
import ContentCard from "./ContentCard.vue";
export default {
  components: { ContentCard },
};
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
