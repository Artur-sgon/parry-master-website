document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.getElementById("close-button");
    const overlay = document.querySelector(".popup-overlay");

    if (closeBtn && overlay) {
        closeBtn.addEventListener("click", () => {
            // This hides the overlay and all its children
            overlay.style.display = "none";
        });
    }
});