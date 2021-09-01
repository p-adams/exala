<template>
  <content-card>
    <template v-slot:header> Start </template>
    <template v-slot:content>
      <div class="start-content">
        <p>
          Learn how to identify and remove physical impurity following the steps
          below:
        </p>
        <ul>
          <li>Select type of physical impurity</li>
          <li>Choose how the selected physical impurity transferred</li>
          <li>Choose the selected physical impurity attributes</li>
          <li>
            Receive instructions to wash away the chosen physical impurity
          </li>
        </ul>
        <p>Follow the prompts above for further instructions.</p>
      </div>
    </template>
  </content-card>
</template>

<script>
import ContentCard from "./ContentCard.vue";
export default {
  components: { ContentCard },
};
</script>

<style lang="scss" scoped>
.start-content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 85%;
  margin-left: 4px;
  ul {
    list-style-type: ordered;
    li {
      line-height: 25px;
    }
  }
}
</style>
