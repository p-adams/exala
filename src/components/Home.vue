<template>
  <div>
    <p class="prompt">{{ prompt }}</p>
    <ul v-show="route.name !== 'home'">
      <li v-for="(step, index) in steps" :key="index">
        <span class="step-container">
          <app-icon
            v-if="route.name === step.path.substring(1)"
            icon-class="fa-chevron-down"
          ></app-icon>
          <span v-else />
          <span
            class="step"
            @click="handleStep(step)"
            :class="{ active: route.name === step.path.substring(1) }"
            >{{ index + 1 }}</span
          >
        </span>
      </li>
    </ul>
    <section>
      <article v-if="route.name === 'home'">
        <p>
          exhala is an interactive walkthrough on how to remove physical
          impurity
        </p>
        <p>
          Your body, clothing, or place of worship came into contact with a
          physical impurity
        </p>

        <p>
          To begin the walkthrough, click
          <router-link to="/start">Start</router-link> to begin.
        </p>
      </article>
      <section class="rendered-view-container">
        <router-view />
      </section>
    </section>
  </div>
</template>

<script setup>
import { onUpdated, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import prompts from "../utils/routeNameToDescriptionMap";
import AppIcon from "./app/AppIcon.vue";
const router = useRouter();
const route = useRoute();
const prompt = ref(prompts()[route.name]);
onUpdated(() => {
  prompt.value = prompts()[route.name];
});
const { children: steps } = router
  .getRoutes()
  .find((route) => route.path === "/");

const handleStep = ({ path }) => {
  prompt.value = prompts()[route.name];
  router.push(path);
};
</script>

<style scoped lang="scss">
.prompt {
  font-size: 18px;
}
.rendered-view-container {
  > * {
    display: grid;
  }
}
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 25px;
  display: inline-block;
}

.step-container {
  display: flex;
  flex-direction: column;
  .fas {
    &.fa-chevron-down {
      color: cornflowerblue;
    }
  }
}

.step {
  cursor: pointer;
  padding: 10px;
  &.active {
    color: cornflowerblue;
  }
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
