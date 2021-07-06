<template>
  <div class="transfer-container">
    <div class="transfer">
      <content-card>
        <template v-slot:header> dry item wet filth </template>
      </content-card>
    </div>
    <div class="transfer">
      <content-card>
        <template v-slot:header> wet item dry filth</template>
      </content-card>
    </div>
    <div class="transfer">
      <content-card>
        <template v-slot:header> wet item wet filth</template>
      </content-card>
    </div>
    <div class="transfer">
      <content-card>
        <template v-slot:header>dry item dry filth</template>
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
</style>
