const menuBtn = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.textContent = isOpen ? "✖" : "☰";
});
