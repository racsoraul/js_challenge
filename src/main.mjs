import {
    get_users,
    get_posts,
    get_gender,
} from "./api.mjs"

// TEST: get_users
get_users()
    .then(console.log)

// TEST: get_posts
get_posts()
    .then(console.log)

// TEST: get_gender
get_gender("william")
    .then(console.log)