var themBtn = document.querySelector(".theme") ; 
var element = document.body;
var menuBtn = document.querySelector(".menubtn");
var Menu = document.querySelector('.menu') ;
var closeBtn = document.querySelector(".CLO") ;
var sunn = document.querySelector('.sunn') ;
var dark = 'dark_mode' ;
var light = 'sunny' ;



themBtn.addEventListener('click' , function(){
    element.classList.toggle('dark-theme') ;
})

menuBtn.addEventListener('click' , function(){
   Menu.classList.toggle('show')
})

closeBtn.addEventListener('click' , function(){
    Menu.classList.toggle('show')
})


