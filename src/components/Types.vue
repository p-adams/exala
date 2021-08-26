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
            :dialogContent="computedLightDialog.content"
            @toggleDialog="showDialog('type_light')"
            :open="!!currentDialog('type_light')"
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
          <app-dialog
            :dialogContent="computedMediumDialog.content"
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
            :dialogContent="computedHeavyDialog.content"
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
import { computed, ref } from "@vue/reactivity";
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
const computedLightDialog = computed(
  () => currentDialog("type_light") || { key: "#", content: "" }
);
const computedMediumDialog = computed(
  () => currentDialog("type_medium") || { key: "#", content: "" }
);
const computedHeavyDialog = computed(
  () => currentDialog("type_heavy") || { key: "#", content: "" }
);
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
