document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark-mode");
        const h2Elements = document.querySelectorAll("h2");
        h2Elements.forEach(h2 => h2.classList.add("dark-mode"));
        darkModeToggle.textContent = "Light Mode";
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const h2Elements = document.querySelectorAll("h2");
        h2Elements.forEach(h2 => h2.classList.toggle("dark-mode"));

        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "Light Mode";
        } else {
            darkModeToggle.textContent = "Dark Mode";
        }
    });
});
