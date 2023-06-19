const menuIcon= document.getElementById("menu-icon");

const menu= document.getElementById("menu");

menuIcon.addEventListener("click", () => {
    if (menu.className="hiden"){
        menu.classList.remove("hiden");
    }
    else{
        menu.classList.add("hiden");
    }
});

