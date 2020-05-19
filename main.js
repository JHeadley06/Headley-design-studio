document.getElementById("menu-trigger").addEventListener("click", menuDisplay);

function menuDisplay() {
    document.getElementById("sub-menu").classList.toggle("active");
    document.getElementById("menu-icon").classList.toggle("active");
    document.getElementById("x-icon").classList.toggle("active");
}