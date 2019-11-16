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
    <span>username:</span> ${username}
    `
    return card
}

export default user