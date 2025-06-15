// Intro text animation on homepage
const intro = document.getElementById("intro-text");
if (intro) {
  const text = "Hi, I'm Nate. I build digital things.";
  let i = 0;
  const type = () => {
    if (i < text.length) {
      intro.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  };
  type();
}

// Dark mode toggle
const toggleBtn = document.getElementById("toggle-mode");
toggleBtn?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("mode", document.body.classList.contains("dark") ? "dark" : "light");
});

// Load dark mode preference
if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
}
