<template>
  <div class="types-container">
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span
            >light
            <app-icon @on-icon-click="showInfo" icon-class="fa-info" /> </span
        ></template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span>medium <app-icon icon-class="fa-info" /> </span>
        </template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span>heavy <app-icon icon-class="fa-info" /></span>
        </template>
      </content-card>
    </div>
  </div>
</template>

<script setup>
import ContentCard from "./ContentCard.vue";
import AppIcon from "./app/AppIcon.vue";
function showInfo() {
  console.log("show");
}
</script>

<style lang="scss" scoped>
.types-container {
  grid-template-columns: auto auto auto;
  span {
    i {
      font-size: 14px;
    }
  }
}
@media screen and (max-width: 44em) {
  .types-container {
    grid-template-columns: auto;
  }
}
</style>
