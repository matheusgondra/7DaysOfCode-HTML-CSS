let show = true;
const navbar = document.querySelector(".navbar");
const menuToggle = document.querySelector(".navbar_toggle-menu");

menuToggle.addEventListener("click", () => {
   document.body.style.overflow = show ? "hidden" : "initial"
   navbar.classList.toggle("on", show);
   show = !show;
});