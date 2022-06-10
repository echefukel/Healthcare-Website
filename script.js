const menu = document.querySelector('.fa-bars');
const nav = document.getElementById('nav');
const closeHandle = document.querySelector('i');
const home = document.getElementById('homes')
const about = document.getElementById('about')
const signup = document.getElementById('signup')
const testimonials = document.getElementById('testimonials')



function open(){
    // menu.classList.add('ease-out');
    console.log('works');
    nav.classList.add('ease-out');
}
function close(){
    console.log('close');
    nav.classList.remove('ease-out')
}

// event Listeners
menu.addEventListener('click',open);
closeHandle.addEventListener('click',close);
home.addEventListener('click',close);
about.addEventListener('click',close)




