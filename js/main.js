const menuopen = document.getElementById("menuopen");
const Menu = document.getElementById("Menu");
const close11 = document.getElementById("close11");

menuopen.onclick = function(){showMenu()};

function showMenu() {
    Menu.style.left = 0;    

}

close11.onclick = function(){hideMenu()};

function hideMenu() {
    Menu.style.left = "-100%";
}