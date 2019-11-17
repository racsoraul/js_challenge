import config from "../utilities/config.mjs";
import { get_posts } from "../utilities/api.mjs";
import { get_user_posts } from "../utilities/utils.mjs";
import post from "./post.mjs";

/**
 * represents a card showing user's data
 * @param user_data user's data
 * @returns {Element} piece of UI to be rendered
 */
function user(user_data) {
  const { id, name, username, email, phone, website } = user_data;
  const card = document.createElement("div");
  card.className = "user_card";

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
    <span>email:</span> <br/>
    <a href="mailto:${email}">${email}</a> <br/>
    <span>phone:</span> <br/> ${phone} <br/>
    <span>website:</span> <br/>
    <a href="${website}">${website}</a>
    <div class="actions">
        <button class="view_details">view details</button>
        <button class="posts">posts</button>
    </div>
    `;

  const posts_button = card.getElementsByClassName("posts")[0];
  posts_button.onclick = onPosts.bind(null, id);

  const view_details_button = card.getElementsByClassName("view_details")[0];
  view_details_button.onclick = onViewDetails.bind(null, user_data);

  return card;
}

async function onPosts(user_id) {
  const drawer = document.getElementById("drawer");
  const title = document.getElementById("title_js");
  const users_containers = document.getElementsByClassName(
    "users_container"
  )[0];
  title.style.position = "sticky";
  title.style.top = "0px";
  title.style.zIndex = "10";
  title.innerText = "Loading...";

  const posts = await get_posts();
  const user_posts = get_user_posts(posts, user_id).map(post);

  if (drawer.children.length > 1) {
    drawer.removeChild(drawer.lastChild);
  }

  // simple posts container
  const container = document.createElement("div");
  container.id = "posts_container";
  container.style.textAlign = "center";

  // set content
  for (let index = 0; index < user_posts.length; index++) {
    container.appendChild(user_posts[index]);
  }
  drawer.appendChild(container);

  title.style.position = "inherit";
  title.innerText = "JS Challenge";

  // push content
  users_containers.style.marginLeft = "400px";
  title.style.marginLeft = "400px";

  // show drawer
  drawer.style.width = "400px";
}

async function onViewDetails(user_data) {
  const drawer = document.getElementById("drawer");
  const title = document.getElementById("title_js");
  const users_containers = document.getElementsByClassName(
    "users_container"
  )[0];
  title.style.position = "sticky";
  title.style.top = "0px";
  title.style.zIndex = "10";
  title.innerText = "Loading...";

  const {
    name,
    username,
    email,
    address,
    phone,
    website,
    company
  } = user_data;

  if (drawer.children.length > 1) {
    drawer.removeChild(drawer.lastChild);
  }

  // set content
  const container = document.createElement("div");
  container.style.textAlign = "center";
  container.innerHTML = `
        <h2>${name}</h2>
        <span>username:</span> <br/>
        ${username} <br/>
        <span>email:</span> <br/>
        <a href="mailto:${email}">${email}</a> <br/>
        <span>phone:</span> <br/> ${phone} <br/>
        <span>website:</span> <br/>
        <a href="${website}">${website}</a>
        <h3> Address </h3>
        <span>street:</span> <br/> ${address.street}<br/>
        <span>suite:</span> <br/> ${address.suite}<br/>
        <span>city:</span> <br/> ${address.city} <br/>
        <span>zipcode:</span> <br/> ${address.zipcode}<br/>
        <span>geo:</span> <br/> <a target="_blank" href="https://maps.google.com?q=${address.geo.lat},${address.geo.lng}">(${address.geo.lat}, ${address.geo.lng}) </a> <br/>
        <h3>Company</h3>
        <span>name:</span> <br/> ${company.name}<br/>
        <span>catchPhrase:</span> <br/> ${company.catchPhrase}<br/>
        <span>bs:</span> <br/> ${company.bs} <br/>
    `;
  drawer.appendChild(container);

  title.style.position = "inherit";
  title.innerText = "JS Challenge";

  // push content
  users_containers.style.marginLeft = "400px";
  title.style.marginLeft = "400px";

  // show drawer
  drawer.style.width = "400px";
}

export default user;
