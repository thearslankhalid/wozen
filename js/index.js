
// Code for collapsible menu

let collapsibleMenu = document.getElementsByClassName('collapsible-menu')[0]

let menuBarsIcon = collapsibleMenu.querySelector('.menu-bar')

let menuCrossIcon = collapsibleMenu.querySelector('.menu-cross')

let ul = collapsibleMenu.querySelector('ul');

// Open menu function
async function open_menu(){
    collapsibleMenu.style.height = '47.5%'
    collapsibleMenu.style.backgroundColor = '#141738'

    menuBarsIcon.classList.add('closed')
    menuCrossIcon.classList.remove('closed')

    ul.classList.remove('closed')
    
}

async function close_menu(){

    ul.classList.add('closed')

    menuCrossIcon.classList.add('closed')
    menuBarsIcon.classList.remove('closed')

    
    collapsibleMenu.style.backgroundColor = 'transparent'
    
}

menuBarsIcon.addEventListener('click', open_menu)

menuCrossIcon.addEventListener('click', close_menu)
