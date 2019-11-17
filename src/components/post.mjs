function post(data) {
    const { title, body } = data
    const container = document.createElement("div")
    container.className = "post"

    const post_title = document.createElement("h1")
    post_title.innerText = title
    container.appendChild(post_title)

    const post_body = document.createElement("p")
    post_body.innerText = body
    container.appendChild(post_body)

    return container
}

export default post