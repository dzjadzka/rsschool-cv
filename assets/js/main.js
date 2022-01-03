/*==================== SHOW MENU ====================*/

const showMenu = (toggleID, navID) => {
    const toggle = document.getElementById(toggleID);
    const nav = document.getElementById(navID);

    if (toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        })
    }
}

showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU ====================*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
