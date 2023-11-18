let open_menu=document.getElementById('menu_open');
let close_menu=document.getElementById('menu_close');
let nav_menu =document.getElementById('ul_menu');
let primary_button2  =document.getElementById('primary_button2');
let man_figure  =document.getElementById('man_figure');
const mediaQuery = window.matchMedia('(max-width: 1024px) and (min-width: 450px)')


window.onload =()=>{
    close_menu.classList.add('hide');
    nav_menu.classList.add('hide');
    open_menu.classList.add('hide');
    
}


open_menu.onclick=()=>{
    if (mediaQuery.matches) {

        close_menu.style.display='block'
        nav_menu.style.display='flex'
        open_menu.style.display='none'
    }
    
    // primary_button2.style.position='absolute'
    // primary_button2.style.left='50%'
    // primary_button2.style.transform='translateX(-50%)'
    
    man_figure.style.display='none'
}

close_menu.onclick=()=>{
    if (mediaQuery.matches) {
        
        close_menu.style.display='none'
        nav_menu.style.display='none'
        open_menu.style.display='block'
        // primary_button2.style.position='static'
        man_figure.style.display='block'
        
    }
}



/**scrool */
let scroll_button =document.getElementById('up_btn');
scroll_button.addEventListener("click", () => {
    window.scroll({
        top:0,
        left:0 , 
        behavior:'smooth'
    })
})

window.addEventListener('scroll',()=>{
    if(scrollY<=726.2816162109375)
    {
        scroll_button.style.display='none'
        
    }
    else{
        scroll_button.style.display='block'
    }
})