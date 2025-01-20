document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const icon = themeToggleButton.querySelector("i");
  const text = themeToggleButton.querySelector("span");

  // Check if dark mode is saved in localStorage
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.replace("fa-moon", "fa-sun"); // Change icon to sun
    text.textContent = "Light Mode";
  }

  // Toggle dark mode
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      icon.classList.replace("fa-moon", "fa-sun"); // Change icon to sun
      text.textContent = "Light Mode";
    } else {
      localStorage.removeItem("theme");
      icon.classList.replace("fa-sun", "fa-moon"); // Change icon to moon
      text.textContent = "Dark Mode";
    }
  });
});

