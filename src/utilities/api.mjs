/**
 * http api methods
 */

import config from "../utilities/config.mjs"

/**
 * get users
 * @returns {Promise} array of users
 */
export async function get_users() {
    try {
        const response = await fetch(config.USERS_URL)
        const users = await response.json()
        return users
    } catch (error) {
        console.error(error)
    }
}

/**
 * get posts
 * @returns {Promise} array of posts
 */
export async function get_posts() {
    try {
        const response = await fetch(config.POSTS_URL)
        const posts = await response.json()
        return posts
    } catch (error) {
        console.error(error)
    }
}

/**
 * get gender based on user name
 * @param first_name name of user
 */
export async function get_gender(first_name) {
    try {
        const response = await fetch(`${config.GENDERIZE_URL}/?name=${first_name}`)
        const gender = await response.json()
        return gender
    } catch (error) {
        console.error(error)
    }
}