/**
 * utilities
 */

/**
 * get user first name
 * @param full_name user full name
 * @returns {string} first name
 */
export function get_first_name(full_name) {
    return full_name.split(" ")[0]
}

/**
 * appends a child to the root node
 * @param child dom element to append
 */
export function append_to_app(child) {
    const app_node = document.getElementById("root")
    app_node.appendChild(child)
}

/**
 * gets posts of a given users
 * @param posts holds the posts state
 * @param user_id user's id
 */
export function get_user_posts(posts, user_id) {
    return posts.filter(post => {
        if (post.userId === user_id) {
            return post
        }
    })
}