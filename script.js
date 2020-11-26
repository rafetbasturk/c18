function toggle(){
    let hamburger = document.getElementById("hamburger");
    let close = document.getElementById("close");
    let menu = document.getElementById("nav-menu");

    if (menu.style.display == "none") {
        menu.style.display = "inline";
        hamburger.style.display = "none";
        close.style.display = "block";
    } else {
        menu.style.display = "none";
        hamburger.style.display = "block";
        close.style.display = "none";
    }
}