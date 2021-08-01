<template>
  <div class="types-container">
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span
            >light
            <app-tooltip position="top" tooltip-data="light physical impurity"
              ><app-icon icon-class="fa-info-circle"
            /></app-tooltip> </span
        ></template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span
            >medium
            <app-tooltip position="top" tooltip-data="medium physical impurity"
              ><app-icon icon-class="fa-info-circle"
            /></app-tooltip>
          </span>
        </template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span
            >heavy
            <app-tooltip position="top" tooltip-data="heavy physical impurity"
              ><app-icon
                icon-class="fa-info-circle"
                @on-icon-click="
                  tooltipIsVisible = !tooltipIsVisible
                " /></app-tooltip
          ></span>
        </template>
      </content-card>
    </div>
  </div>
</template>

<script setup>
import ContentCard from "./ContentCard.vue";
import AppIcon from "./app/AppIcon.vue";
import AppTooltip from "./app/AppTooltip.vue";
import { ref } from "@vue/reactivity";
const tooltipIsVisible = ref(false);
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
