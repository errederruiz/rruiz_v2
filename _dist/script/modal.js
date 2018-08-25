$(document).ready(function(){
    $("#clickMe").click(function(){
        $(".overlay").toggleClass("blue");
        $(".container").toggleClass("noScroll");
        $(".invert").toggleClass("invertClickMe");
    });
});

const triggers = document.querySelectorAll('.trigger > li');
const background  = document.querySelector('.popUp');
const nav  = document.querySelector('.overlay');

function handleEnter() {
  this.classList.add('trigger-enter');
  this.classList.add('trigger-enter-active');
  background.classList.add('open');
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
