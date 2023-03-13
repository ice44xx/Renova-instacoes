window.addEventListener('scroll', function () {
    let nav = this.document.getElementById('navbar')
    nav.classList.toggle('fixed', this.window.scrollY > 0)
})


var display = document.getElementById('count-projects')
var count = 0
var duration = 3000
var interval = 80
var steps = duration / interval
var increment = 100 / steps

var timer = setInterval(function () {
  count += increment
  display.innerText = Math.round(count)
  if(count >= 100){
    clearInterval(timer);
    display.innerText = '100'
  }
}, interval)

var displayMarket = document.getElementById('count-market')
var countMarket = 0
var durationTimer = 3000
var intervalTimer = 30
var stepsTimer = duration/intervalTimer
var incrementValue = 10 / steps

var timerMarket = setInterval(function () {
  countMarket += incrementValue
  displayMarket.innerText = Math.round(countMarket)
  if(countMarket >= 10){
    clearInterval(timerMarket)
    displayMarket.innerText = '10'
  }
},intervalTimer)


let videos = document.getElementsByClassName('video')

for(i = 0; i < videos.length; i++){
    let video = videos[i]

    video.addEventListener('mouseenter', function () {
        video.play()
    })
    
    video.addEventListener('mouseleave', function () {
        video.pause()
        video.currentTime = 0
    })
}


const line = document.querySelector('.lineone')
const linetwo = document.querySelector('.linetwo')
const linethree = document.querySelector('.linethree')
const hamburger = document.getElementById('hamburger')
const wall = document.getElementById('wall')
hamburger.addEventListener('click', function (){
  wall.classList.toggle('open')
  line.classList.toggle('active')
  linetwo.classList.toggle('active')
  linethree.classList.toggle('active')
})


var swiper = new Swiper(".mySwiper", {
  
    slidesPerView: 4,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
      breakpoints: {
          0: {
            slidesPerView: 1,
          },
          670: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          950: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1250:{
            slidesPerView: 4,
          }
        },
  });