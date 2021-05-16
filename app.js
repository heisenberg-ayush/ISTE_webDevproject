
window.addEventListener("scroll", function(){
    const header = document.querySelector(".header")
    header.classList.toggle("sticky",window.scrollY >50)
})
var hamburgermenu = document.querySelector(".hamburger-menu")
var lines = document.querySelector(".line")
var links = document.querySelector(".links")

 hamburgermenu.addEventListener("click", function(){
     hamburgermenu.classList.toggle("change")
 })
 
 hamburgermenu.addEventListener("click", function(){
    var navigation = document.querySelector(".navigation")
     navigation.classList.toggle("move")
 })
 
 var mode = document.querySelector(".mode")

 mode.addEventListener("click", function(){
    
    var mainheading = document.querySelector(".mainheading")
    var header = document.querySelector(".header")
    var link = document.querySelector(".link")
    var logo = document.querySelector(".logo a")
    var games = document.querySelector(".subheading")
    var information = document.querySelector(" .maininfo")
    var everything = document.querySelector("#everything")
    everything.classList.toggle("modeswitch")
    mode.classList.toggle("colorchange")
    mainheading.classList.toggle("white")
    information.classList.toggle("white")
    games.classList.toggle("white")
    mode.classList.toggle("colorchange")
    
 })

