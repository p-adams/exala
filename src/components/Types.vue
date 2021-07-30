<template>
  <div class="types-container">
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span>light <i class="fas fa-info"></i> </span
        ></template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span>medium <i class="fas fa-info"></i> </span>
        </template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span>heavy <i class="fas fa-info"></i></span>
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
@media screen and (max-width: 44em) {
  .types-container {
    grid-template-columns: auto;
  }
}
</style>
