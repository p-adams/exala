const mapRouteToPrompts = (detail = "") => {
  return {
    home: "Welcome to exhala",
    start: "Click start to begin",
    types: "Describe the type of filth",
    transfer: "Describe how the filth transferred",
    attributes: "Describe the taste, color, and smell",
    clean: "Steps to remove physical impurity",
  };
};

export default mapRouteToPrompts;
