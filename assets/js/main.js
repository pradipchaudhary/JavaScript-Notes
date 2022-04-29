// alert("Welcome to js");

// Pre Loading
var preloader = document.getElementById("loading");

addEventListener("load", function () {
  preloader.style.display = "none";
});

// Back to Top
var mybutton = document.getElementById("back_to_top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// Cookies JS
const cookiesBox = document.querySelector(".cookies");
const agreeBtn = document.querySelector(".agree-btn");
agreeBtn.onclick = () => {
  // Setting Cookies 1 month, after 1 month cookies will be expierd automatically.
  document.cookie = "CookieBy=SarathiTechnosoft; max-age=" + 60 * 60 * 24 * 30;

  if (document.cookie) {
    //if above cookie set
    cookiesBox.classList.add("hide");
  } else {
    alert("Cookies can't be set !");
  }
};
