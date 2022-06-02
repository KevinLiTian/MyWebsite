const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function alertmsg() {
  var name = document.forms["myform"]["Name"].value;
  var email = document.forms["myform"]["Email"].value;
  var message = document.forms["myform"]["Message"].value;
  var valid = false;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      valid = true;
    }
  }

  if (name !== "" && email !== "" && message !== "" && valid === true) {
    document.getElementById("suc").style.display = "block";
  } else {
    document.getElementById("err").style.display = "block";
  }
}
