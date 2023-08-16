/*=============== SHOW MENU ===============*/
const menu = document.querySelector('#nav-menu'),
      toggle_btn = document.querySelector('#nav-toggle'),
      close_btn = document.querySelector('#nav-close')
      navLinks = document.querySelectorAll(".nav__link")
// Validate if toggle btn exists show when clicked
if(toggle_btn){
    toggle_btn.addEventListener('click', ()=>{
        menu.classList.add("show-menu")
      })
}

// Hide the menu when close btn clicked
if(close_btn){
    close_btn.addEventListener('click', ()=>{
        menu.classList.remove('show-menu')
      })
}
/*=============== REMOVE MOBILE MENU WHEN NAV ITEM CLICKED ===============*/
//  define function to add to each link
const linkAction = () =>{
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(link => {
    link.addEventListener('click',linkAction )
});

/*=============== GSAP ANIMATION ===============*/

