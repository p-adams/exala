import { ref } from "vue";
function useDialogs() {
  const dialogs = ref([]);
  const addDialog = (dialog) => dialogs.value.push(dialog);
  const removeDialog = (key) => {
    const dialogIndex = dialogs.value.findIndex((dialog) => dialog.key === key);
    dialogs.value.splice(dialogIndex, 1);
  };
  const currentDialog = (key) =>
    dialogs.value.find((dialog) => dialog.key === key);
  return { dialogs, addDialog, currentDialog, removeDialog };
}
export default useDialogs;
