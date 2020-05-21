let toggleNavStatus = false;

function openMenu() {
    let getSidebar = document.querySelector("#sub-menu");
    let getSideLinks = document.querySelectorAll("a.menu-li");
    let getMenuIcon = document.querySelector("#menu-icon");
    let getXIcon = document.querySelector("#x-icon");

    if (toggleNavStatus === false) {
        getSidebar.style.width = "300px";
        getMenuIcon.classList.add("active");
        getXIcon.classList.add("active");

        let liLength = getSideLinks.length;
        for (let i = 0; i < liLength; i++) {
            getSideLinks[i].style.visibility = "visible";
            getSideLinks[i].style.opacity = "1";
        }
    
        toggleNavStatus = true;

    }   else if (toggleNavStatus === true) {

        let liLength = getSideLinks.length;
        for (let i = 0; i < liLength; i++) {
            getSideLinks[i].style.visibility = "hidden";
            getSideLinks[i].style.opacity = "0";
        }

        getXIcon.classList.remove("active");
        getMenuIcon.classList.remove("active");
        getSidebar.style.width = "100px";
        
        toggleNavStatus = false;
    }

}