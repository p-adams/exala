<template>
  <div class="types-container">
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span class="text">
            <app-tooltip position="top" tooltip-data="light physical impurity">
              light
            </app-tooltip>
          </span>
          <app-dialog
            dialogContent="light"
            @toggleDialog="showDialog()"
            :open="dialogIsVisible"
          />
        </template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span class="text">
            <app-tooltip position="top" tooltip-data="medium physical impurity"
              >medium</app-tooltip
            >
          </span>
          <app-icon icon-class="fa-info-circle" />
        </template>
      </content-card>
    </div>
    <div class="type">
      <content-card>
        <template v-slot:header>
          <span class="text">
            <app-tooltip position="top" tooltip-data="heavy physical impurity"
              >heavy</app-tooltip
            ></span
          >
          <app-icon icon-class="fa-info-circle" />
        </template>
      </content-card>
    </div>
  </div>
</template>

<script setup>
import ContentCard from "./ContentCard.vue";
import AppIcon from "./app/AppIcon.vue";
import AppTooltip from "./app/AppTooltip.vue";
import AppDialog from "./app/AppDialog.vue";
import { computed, ref } from "@vue/reactivity";
const dialogIsVisible = ref(false);
const showDialog = () => {
  dialogIsVisible.value = !dialogIsVisible.value;
};
</script>

<style lang="scss" scoped>
.types-container {
  grid-template-columns: auto auto auto;
  .type {
    .text {
      margin-right: 10px;
    }
  }
}
@media screen and (max-width: 44em) {
  .types-container {
    grid-template-columns: auto;
  }
}
</style>
