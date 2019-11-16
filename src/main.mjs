import application from "./components/app.mjs"
import { append_to_app } from "./utilities/utils.mjs"

// mount app in root node
application().then(append_to_app)