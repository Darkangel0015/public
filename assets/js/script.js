'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);
  })

}

document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  var email = document.getElementById("email").value;
  
  var mailto = "mailto:unityxtech.info@gmail.com?subject=Message from " + email;
  window.open(mailto);
  });

/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

})

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function searchText() {
  var input = document.getElementById("search").value;
  var elements = document.getElementsByTagName("p");
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].textContent.indexOf(input) >= 0) {
      elements[i].style.backgroundColor = "yellow";
    }
  }
}