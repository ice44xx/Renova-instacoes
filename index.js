window.addEventListener('scroll', function () {
    let nav = this.document.getElementById('navbar')
    nav.classList.toggle('fixed', this.window.scrollY > 0)
})

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
  wall.classList.toggle('close')
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