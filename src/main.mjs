import { append_to_app } from "./utilities/utils.mjs"
import users from "./components/user_list.mjs"

// title component
const title = document.createElement("h1")
title.innerText = "JS Challenge"

// footer component
const footer = document.createElement("div")
footer.className = "footer"
footer.innerHTML = `&copy; Copyright ${new Date().getFullYear()}, <a href="mailto:racsoraul@gmail.com">Raúl Pleitez</a>`
footer.style.marginBottom = "7px"

// mount app in root node
append_to_app(title)
users().then(append_to_app)
append_to_app(footer)