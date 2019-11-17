import title from "./title.mjs"
import users from "./user_list.mjs"
import drawer from "./drawer.mjs"

async function app() {
    // footer component
    const footer = document.createElement("div")
    footer.className = "footer"
    footer.innerHTML = `&copy; Copyright ${new Date().getFullYear()}, <a href="mailto:racsoraul@gmail.com">Raúl Pleitez</a>`

    // simple app container
    const container = document.createElement("div")

    container.appendChild(drawer())
    container.appendChild(title())
    container.appendChild(await users())
    container.appendChild(footer)

    return container
}

export default app