document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const h2Elements = document.querySelectorAll("h2");
        h2Elements.forEach(h2 => h2.classList.toggle("dark-mode"));
    });
});
