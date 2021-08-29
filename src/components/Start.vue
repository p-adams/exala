<template>
  <content-card>
    <template v-slot:header> Start </template>
    <template v-slot:content>
      <ul>
        <li>Types of physical impurity</li>
      </ul>
      <p>Follow the prompts above for instructions.</p>
    </template>
  </content-card>
</template>

<script>
import ContentCard from "./ContentCard.vue";
export default {
  components: { ContentCard },
};
</script>

<style scoped></style>
