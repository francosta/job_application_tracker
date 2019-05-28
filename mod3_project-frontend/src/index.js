// alert("Test")
const userURL = "http://localhost:3000/users";

// const ongoingApplications = document.getElementById("ongoing-applications")
// ongoingApplications.innerText = "TEST ONGOING"

function getUsers(userURL) {
  return fetch(userURL).then(resp => resp.json());
}

function renderOngoingApplications(users) {
  const ongoingApplications = document.getElementById("ongoing-applications");
}
