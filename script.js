// Toggle class active
const navbarNav = document.querySelector(".menu");
// ketika hamburger-menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// // const navbar = document.querySelector(".menu");
// // const hamburger = document.querySelector("#hamburger-menu");
// // hamburger.onclick = function () {
// //   navbar.classList.toggle("active");
// };
