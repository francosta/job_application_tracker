// alert("Test")
const usersURL = "http://localhost:3000/users";

// const ongoingApplications = document.getElementById("ongoing-applications")
// ongoingApplications.innerText = "TEST ONGOING"

function getUsers(userURL) {
  return fetch(userURL).then(resp => resp.json());
}

function renderOngoingApplications(users) {
  const ongoingApplications = document.getElementById("ongoing-applications");
}

const logout = () => {
  const id = currentUserId;
  const sessionsURL = "http://localhost:3000/sessions";
  const sessionURL = `${sessionsURL}/${id}`;

  const options = {
    method: "DELETE"
  };
  return fetch(sessionURL, options).then(response => {
    if (response.status === 200) {
      response.json();
      currentUserId = null;
      window.location.replace("./login.html");
    } else {
      MessageEvent(response.json());
    }
  });
};
