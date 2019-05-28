const formEl = document.querySelector(".form");
const USER_URL = "http://localhost:3000/users";
const SESSIONS_URL = "http://localhost:3000/sessions";
let currentUserId = null;

const login = url => {
  const userEmail = formEl.querySelector("#email").value;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail })
  };
  return fetch(url, options)
    .then(response => response.json())
    .then(id => (currentUserId = id));
};

const listenToForm = () => {
  formEl.addEventListener("submit", e => {
    e.preventDefault(), login(SESSIONS_URL);
  });
};

const init = () => {
  listenToForm();
};

init();
