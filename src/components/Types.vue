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
            :dialogContent="getCurrentDialog('type_light').content"
            @toggleDialog="showDialog('type_light')"
            :open="!!currentDialog('type_light')"
          ></app-dialog>
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
          <app-dialog
            :dialogContent="getCurrentDialog('type_medium').content"
            @toggleDialog="showDialog('type_medium')"
            :open="!!currentDialog('type_medium')"
          />
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
          <app-dialog
            :dialogContent="getCurrentDialog('type_heavy').content"
            @toggleDialog="showDialog('type_heavy')"
            :open="!!currentDialog('type_heavy')"
          />
        </template>
      </content-card>
    </div>
  </div>
</template>

<script setup>
import ContentCard from "./ContentCard.vue";
import AppTooltip from "./app/AppTooltip.vue";
import AppDialog from "./app/AppDialog.vue";
import useDialogs from "./app/useDialogs";
import mapTypeToDialogContent from "../utils/mapTypeToDialogContent";
import { ref } from "@vue/reactivity";
const { addDialog, removeDialog, currentDialog } = useDialogs();
const dialogIsVisible = ref(false);
const showDialog = (key) => {
  dialogIsVisible.value = !dialogIsVisible.value;
  if (dialogIsVisible.value === true) {
    addDialog(mapTypeToDialogContent(key));
  } else {
    removeDialog(key);
  }
};
const getCurrentDialog = (type) =>
  currentDialog(type) || { key: "", content: "" };
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
