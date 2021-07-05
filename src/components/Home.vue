<template>
  <div>
    <h2>Home</h2>
    <router-view />

    <ul>
      <li v-for="(step, index) in steps" :key="index">
        <span @click="handleStep(step)">{{ index + 1 }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const { children: steps } = router
  .getRoutes()
  .find((route) => route.path === "/");
const currentStep = ref(route.name);
const handleStep = ({ path, name }) => {
  currentStep.value = name;
  router.push(path);
};
</script>

<style scoped>
div {
  outline: 1px solid lightgray;
  border-radius: 2px;
  height: 350px;
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
</style>
