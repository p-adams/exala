<template>
  <div>
    <p>{{ prompt }}</p>
    <section>
      <article v-if="route.name === 'home'">
        <h3>
          exhala is an interactive walkthrough on how to remove physical
          impurity
        </h3>
        <h4>
          Your body, clothing, or place of worship came into contact with a
          physical impurity
        </h4>

        <p>
          To begin the walkthrough, click
          <router-link to="/start">Start</router-link> to begin.
        </p>
      </article>

      <router-view />
    </section>
    <ul v-show="route.name !== 'home'">
      <li v-for="(step, index) in steps" :key="index">
        <span class="step" @click="handleStep(step)">{{ index + 1 }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onUpdated, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import prompts from "../utils/routeNameToDescriptionMap";
const router = useRouter();
const route = useRoute();
console.log(route.name);
const prompt = ref(prompts()[route.name]);
onUpdated(() => {
  prompt.value = prompts()[route.name];
});
const { children: steps } = router
  .getRoutes()
  .find((route) => route.path === "/");

const handleStep = ({ path, name }) => {
  prompt.value = prompts()[name];
  router.push(path);
};
</script>

<style scoped>
div {
  outline: 1px solid lightgray;
  border-radius: 2px;
  display: grid;
}
ul {
  align-self: end;
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 10px;
  display: inline-block;
}
.step {
  cursor: pointer;
}
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 300px;
}
h3 {
  text-align: center;
}
</style>
