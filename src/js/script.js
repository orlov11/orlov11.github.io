window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    hamburgerClose = document.querySelector('.hamburger_close');

    hamburger.addEventListener('click', () => {
        hamburgerClose.style.display ='block';
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            console.log(item.textContent);
            hamburgerClose.style.display ='none';
        })
    })

    hamburgerClose.addEventListener('click', ()=>{
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        hamburgerClose.style.display ='none';
    })
})  

    