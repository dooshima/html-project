var menubtn = document.getElementById('menu_btn');
var menu = document.getElementById('desktopnav');
var close = document.getElementById('close_menu_btn');

menubtn.addEventListener('click',()=>{
    menu.style.transform =  menu.getBoundingClientRect().x < 0  && `translateX(0)`;
});

close.addEventListener('click',()=>{
    menu.style.transform =  menu.getBoundingClientRect().x === 0  && `translateX(-100%)`;
});