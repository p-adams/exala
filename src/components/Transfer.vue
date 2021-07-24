<template>
  <div class="transfer-container">
    <div class="transfer">
      <content-card>
        <template v-slot:header>Scenario #1</template>
        <template v-slot:content> dry item wet filth </template>
      </content-card>
    </div>
    <div class="transfer">
      <content-card>
        <template v-slot:header>Scenario #2</template>
        <template v-slot:content> wet item dry filth</template>
      </content-card>
    </div>
    <div class="transfer">
      <content-card>
        <template v-slot:header>Scenario #3</template>
        <template v-slot:content> wet item wet filth</template>
      </content-card>
    </div>
    <div class="transfer">
      <content-card>
        <template v-slot:header>Scenario #4</template>
        <template v-slot:content>dry item dry filth</template>
      </content-card>
    </div>
  </div>
</template>
<script>
import ContentCard from "./ContentCard.vue";
export default {
  components: { ContentCard },
  setup() {},
};
</script>
<style scoped>
.transfer-container {
  grid-template-columns: auto auto;
}
.transfer {
  height: 222px;
}
@media screen and (max-width: 44em) {
  .transfer-container {
    grid-template-columns: auto;
  }
}
</style>
