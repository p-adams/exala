import content from "../content/types.json";
const TYPE_CONTENT = JSON.parse(JSON.stringify(content));
function mapTypeToDialogContent(key) {
  const content = {
    type_light: TYPE_CONTENT["light"],
    type_medium: TYPE_CONTENT["medium"],
    type_heavy: TYPE_CONTENT["heavy"],
  };
  return { key, content: content[key] };
}

export default mapTypeToDialogContent;
