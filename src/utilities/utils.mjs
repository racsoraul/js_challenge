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