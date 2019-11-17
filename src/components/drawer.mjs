/**
 * side element to show data
 */
function drawer() {
  const container = document.createElement("div");
  container.id = "drawer";
  const close = document.createElement("button")
  close.innerText = "close"
  close.onclick = onClose

  container.appendChild(close)

  return container;
}

function onClose() {
  const drawer = document.getElementById("drawer")
  const title = document.getElementById("title_js")
  const users_containers = document.getElementsByClassName(
    "users_container"
  )[0];
  // hide drawer
  drawer.style.width = "0px";
  // pull content
  users_containers.style.marginLeft = "0px";
  title.style.marginLeft = "0px";
}

export default drawer;
