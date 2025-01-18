document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
  
    // Check if dark mode is saved in localStorage
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      themeToggleButton.querySelector("span").textContent = "Light Mode"; // Change button text to Light Mode
    }
  
    // Toggle dark mode
    themeToggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
      // Update button text
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeToggleButton.querySelector("span").textContent = "Light Mode"; // Change button text to Light Mode
      } else {
        localStorage.removeItem("theme");
        themeToggleButton.querySelector("span").textContent = "Dark Mode"; // Change button text to Dark Mode
      }
    });
});
