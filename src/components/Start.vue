<template>
  <content-card>
    <template v-slot:header> Start </template>
    <template v-slot:content>
      <h3>
        Your body, clothing, or place of worship came into contact with a
        physical impurity
      </h3>
      <p>
        Follow the prompts above to be guided along the steps to remove that
        physical impurity.
      </p>
    </template>
  </content-card>
</template>

<script>
import ContentCard from "./ContentCard.vue";
export default {
  components: { ContentCard },
};
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>
