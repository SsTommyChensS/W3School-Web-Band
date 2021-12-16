const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
//Show Modal when Click Buy Tickets Button
function showBuyTickets(){
    modal.classList.add('open');
}
//Hide Modal when Click the Close Button
function hideBuyTickets() {
    modal.classList.remove('open');
}
//Get all the Buy Tickets Button and listen to the Click behavior
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets);
}

modalClose.addEventListener('click', hideBuyTickets);
//The event.stopPropagation () method is an inbuilt method in jQuery which is used to stop the windows propagation. In the DOM tree when setting an event with the child element and the parent element as well then if you hit on the child element event it will call both child and the parent element as well.
modal.addEventListener('click', hideBuyTickets);
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})
//Mobile device
// 1. Open/Close mobile menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function(event) {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
// 2. Auto close menu when choose a menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav') ;
        console.log(isParentMenu);
        if (!isParentMenu) {
            header.style.height = null;
        }
        else {
            event.preventDefault();            
        }      
    }
}
