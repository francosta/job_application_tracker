const formEl = document.querySelector("form");
let currentUserId = null;

// From the template
function showRegisterForm() {
  $(".loginBox").fadeOut("fast", function() {
    $(".registerBox").fadeIn("fast");
    $(".login-footer").fadeOut("fast", function() {
      $(".register-footer").fadeIn("fast");
    });
    $(".modal-title").html("Register with your email address");
  });
  $(".error")
    .removeClass("alert alert-danger")
    .html("");
}
function showLoginForm() {
  $("#loginModal .registerBox").fadeOut("fast", function() {
    $(".loginBox").fadeIn("fast");
    $(".register-footer").fadeOut("fast", function() {
      $(".login-footer").fadeIn("fast");
    });

    $(".modal-title").html("Login with your email address");
  });
  $(".error")
    .removeClass("alert alert-danger")
    .html("");
}

function openLoginModal() {
  showLoginForm();
  setTimeout(function() {
    $("#loginModal").modal("show");
  }, 230);
}
function openRegisterModal() {
  showRegisterForm();
  setTimeout(function() {
    $("#loginModal").modal("show");
  }, 230);
}

function shakeModal() {
  $("#loginModal .modal-dialog").addClass("shake");
  $(".error")
    .addClass("alert alert-danger")
    .html("Invalid email! Try again.");
  $('input[type="password"]').val("");
  setTimeout(function() {
    $("#loginModal .modal-dialog").removeClass("shake");
  }, 1000);
}

//Done by us
const login = () => {
  const userEmail = formEl.querySelector("#email").value;
  const userPassword = formEl.querySelector("#password").value;
  const SESSIONS_URL = "http://localhost:3000/sessions";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: userEmail, password: userPassword })
  };
  return fetch(SESSIONS_URL, options).then(response => {
    if (response.status === 200) {
      response.json().then(id => {
        (currentUserId = id)
        debugger
      });
      window.location.replace("./index.html");
    } else {
      shakeModal();
    }
  });
};

const listenToForm = () => {
  formEl.addEventListener("submit", e => {
    e.preventDefault(), login();
  });
};

const init = () => {
  listenToForm();
};

init();