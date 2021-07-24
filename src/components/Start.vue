<template>
  <content-card>
    <template v-slot:header> Start </template>
    <template v-slot:content>
      display summary of steps
      <p>
        Follow the prompts above to be guided along the steps to remove that
        physical impurity.
      </p></template
    >
  </content-card>
</template>

<script>
import ContentCard from "./ContentCard.vue";
export default {
  components: { ContentCard },
};
</script>

<style scoped></style>
