function title(content = "JS Challenge") {
  const title = document.createElement("h1");
  title.id = "title_js"
  title.innerText = content;

  return title
}

export default title