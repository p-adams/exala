function mapTypeToDialogContent(key) {
  const content = {
    type_light: "light",
    type_medium: "medium",
    type_heavy: "heavy",
  };
  return { key, content: content[key] };
}

export default mapTypeToDialogContent;
