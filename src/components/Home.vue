<template>
  <div>
    <p>{{ prompt }}</p>
    <section>
      <router-view />
    </section>
    <ul>
      <li v-for="(step, index) in steps" :key="index">
        ><span class="step" @click="handleStep(step)">{{ index + 1 }}</span>
        >
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
</style>
