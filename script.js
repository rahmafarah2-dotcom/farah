function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.style.display = nav.style.display === "block" ? "none" : "block";
}

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});