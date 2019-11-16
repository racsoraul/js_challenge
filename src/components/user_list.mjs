import user from "./user.mjs"
import {
    get_users,
} from "../utilities/api.mjs"

/**
 * list of cards
 * @returns {Element[]} piece of UI to be rendered
 */
async function user_list() {
    const container = document.createElement("div")
    container.className = "users_container"

    try {
        // get users
        const users = await get_users()
        // inject user's data into each card
        const cards = users.map(user)

        for (let index = 0; index < cards.length; index++) {
            container.appendChild(cards[index])   
        }

    } catch (error) {
        console.log(error)
    }

    return container
}

export default user_list