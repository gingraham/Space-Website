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

gsap.from('.home__points', 1.5,{opacity: 0, y: -300, delay: .2})
gsap.from('.home__rocket', 1.5,{opacity: 0, y: 300, delay: .3})
gsap.from('.home__planet-1', 1.5,{opacity: 0, y: -300, delay: .8})
gsap.from('.home__planet-2', 1.5,{opacity: 0, y: 200, delay: 1})
gsap.from('.home__cloud-1', 1.5,{opacity: 0, y: 200, delay: 1.2})
gsap.from('.home__cloud-2', 1.5,{opacity: 0, y: 200, delay: 1.3})
gsap.from('.home__content', 1.5,{opacity: 0, y: -100, delay: 1.4})
gsap.from('.home__title img', 1.5,{opacity: 0, y: -100, delay: 1.4})