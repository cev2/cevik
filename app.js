const menu = document.querySelector('.mobile-menu');
const menuItems = document.querySelector('.nav-items')

menu.addEventListener('click', e => {
    menu.classList.toggle('active');
    menuItems.classList.toggle('active');
});

let galleryImages = document.querySelectorAll('.post-image')
let getLatesOpenedImg;
let windowWidth = window.innerWidth;

galleryImages.forEach(function(image, index){
image.onclick = function() {

    getLatestOpenedImg = index +1;

    let container = document.body;
    let newImgWindow = document.createElement('div')
    container.appendChild(newImgWindow);
    newImgWindow.setAttribute('class', 'img-window');
    newImgWindow.setAttribute('onclick', 'closeImg')

}})
