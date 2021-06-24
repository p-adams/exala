<template>
  <div>
    Home
    <ul>
      <li v-for="(step, key) in 4" :key="key">
        <span>{{ step }}</span>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
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
