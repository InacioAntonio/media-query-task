document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  console.log("Username:", username);
  console.log("Password:", password);
  console.log("Remember me:", remember);
});
