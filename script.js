document.addEventListener("DOMContentLoaded", function () {

    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navUl = document.querySelector("nav ul");

    mobileMenuToggle.addEventListener("click", function () {
        navUl.classList.toggle("active"); // Toggle the dropdown menu
    });
    
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            const dropdown = this.parentElement; // Get the parent dropdown container
            const dropdownContent = this.nextElementSibling;

            // Close all other dropdowns
            dropdownToggles.forEach((otherToggle) => {
                if (otherToggle !== toggle) {
                    const otherDropdown = otherToggle.parentElement;
                    const otherContent = otherToggle.nextElementSibling;
                    otherDropdown.classList.remove("active");
                    otherContent.style.maxHeight = null; // Close other dropdowns
                }
            });

            // Toggle the clicked dropdown
            dropdown.classList.toggle("active");
            if (dropdownContent.style.maxHeight) {
                dropdownContent.style.maxHeight = null; // Close
            } else {
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px"; // Open
            }
        });
    });

    // Logic for the About Us page
    const aboutBoxes = document.querySelectorAll(".about-box");

    if (aboutBoxes.length > 0) {
        const checkVisibility = () => {
            aboutBoxes.forEach((box, index) => {
                const boxTop = box.getBoundingClientRect().top;
                const boxBottom = box.getBoundingClientRect().bottom;

                // Check if the box is in the viewport
                if (boxTop < window.innerHeight && boxBottom > 0) {
                    setTimeout(() => {
                        box.classList.add("visible");
                    }, index * 200); // Staggered delay for each box
                }
            });
        };

        // Initial check
        checkVisibility();

        // Check on scroll
        window.addEventListener("scroll", checkVisibility);
    }

    const insightCards = document.querySelectorAll(".insight-card");

    insightCards.forEach((card) => {
        card.addEventListener("click", function () {
            const articleUrl = card.getAttribute("data-article");
            if (articleUrl) {
                window.location.href = articleUrl; // Navigate to the article page
            }
        });
    });
});