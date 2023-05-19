export const createButton = ({
  size = "md",
  task = "primary",
  label,
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);
  btn.className = ["btn", `btn-${size}`, `btn-${task}`].join(" ");
  return btn;
};
