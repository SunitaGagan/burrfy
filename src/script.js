function toggleAccordion(index) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);
    const isOpen = !content.classList.contains('hidden');

    // Close all
    for (let i = 0; i <= 4; i++) {
        document.getElementById(`content-${i}`).classList.add('hidden');
        document.getElementById(`icon-${i}`).textContent = '+';
    }

    // Toggle selected
    if (!isOpen) {
        content.classList.remove('hidden');
        icon.textContent = '−';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const mobileIcon = document.getElementById("mobileIcon");
    const navbar = document.getElementById("navbar");

    mobileIcon.addEventListener("click", () => {
        navbar.classList.toggle("hidden");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });
});