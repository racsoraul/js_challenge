import config from "../utilities/config.mjs"

/**
 * represents a card showing user's data
 * @param user_data user's data
 * @returns {Element} piece of UI to be rendered
 */
function user(user_data) {
    const { id, name, username, email, address, phone, website, company } = user_data
    const card = document.createElement("div")
    card.className = "user_card"

    card.innerHTML = `
    <img
        src="${config.AVATAR_URL}/${id}"
        alt="${username}"
        width=150
    />
    <hr />
    <h2>${name}</h2>
    <span>username:</span> <br/>
    ${username} <br/>
    <details>
        <summary>more</summary>
        <span>email:</span> <br/>
        <a href="mailto:${email}">${email}</a> <br/>
        <span>phone:</span> <br/> ${phone} <br/>
        <span>website:</span> <br/>
        <a href="${website}">${website}</a>
    </details>
    `
    return card
}

export default user