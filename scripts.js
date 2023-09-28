function toggleMenu() {
    console.log("Toggle menu function called."); // Add this line
    const menuList = document.querySelector(".menu-list");
    menuList.classList.toggle("open");
}