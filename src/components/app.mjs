import users from "./user_list.mjs"

async function app() {
    // title component
    const title = document.createElement("h1")
    title.innerText = "JS Challenge"

    // footer component
    const footer = document.createElement("div")
    footer.className = "footer"
    footer.innerHTML = `&copy; Copyright ${new Date().getFullYear()}, <a href="mailto:racsoraul@gmail.com">Raúl Pleitez</a>`

    // simple container
    const container = document.createElement("div")

    container.appendChild(title)
    container.appendChild(await users())
    container.appendChild(footer)

    return container
}

export default app