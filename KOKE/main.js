// top_bn
let topBnClose = document.querySelector('.top_bn_close')
let topBn = document.querySelector('.top_bn_container')

topBnClose.addEventListener('click', () => {
  topBn.style.height = '0'
})


$(function(){
  // $(window).scroll(function(){
  //     if($(this).scrollTop() >= 200){
  //         $('nav').addClass('sticky')
  //     } else {
  //         $('nav').removeClass('sticky')
  //     } // lnb event

  //     if($(this).scrollTop() >= 200){
  //         $('.top').fadeIn('fast')
  //     } else {
  //         $('.top').fadeOut('fast')
  //     } // top event
  // })

  // $('.top_btn').click(function(e){
  //     e.preventDefault()
      
  //     $('html, body').stop().animate({
  //         scrollTop : 0
  //     }, 500)
  // }) // top btn

  // $('.down_btn').click(function(e){
  //     e.preventDefault()
      
  //     $('html, body').stop().animate({
  //         scrollTop : 0
  //     }, 500)
  // }) // down btn

  // $(window).scrollTo({top:0, left:0}, 500)

  // $(window).scrollTo(this.hash || 0, 1000)

})





// 2022 hot
// let main = document.querySelector('.main_visual img')
// let tab = document.querySelectorAll('.tab_imgs div img')

// for(let i=0; i<tab.length; i++) {
//     tab[i].onclick = changeSrc

//     function changeSrc() {
//         let selectTab = this.src
//         main.setAttribute('src', selectTab)
//     }
// }


// 2022 hot
// new Swiper(".hot_swiper_thumbs", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// new Swiper(".hot_swiper", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });



// 2022 main_visual
new Swiper('.main_visual .swiper', {
  // direction: "vertical",
  // loop: true,
  navigation: {
    prevEl: '.main_visual .swiper-button-prev',
    nextEl: '.main_visual .swiper-button-next'
  }
})


// 모든 섹션들 나타나기
const bestScrollUp = document.querySelector('.best')
const newScrollUp = document.querySelector('.new')
const hotScrollUp = document.querySelector('.hot')
const reviewScrollUp = document.querySelector('.review')

window.addEventListener('scroll', () => {
  if(window.scrollY > 500){
    gsap.to(bestScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(bestScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // best

window.addEventListener('scroll', () => {
  if(window.scrollY > 1250){
    gsap.to(newScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(newScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // new

window.addEventListener('scroll', () => {
  if(window.scrollY > 2500){
    gsap.to(hotScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(hotScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // hot

window.addEventListener('scroll', () => {
  if(window.scrollY > 5200){
    gsap.to(reviewScrollUp, 0.7, {
      opacity: 1,
      y: -70
    })
  } else {
    gsap.to(reviewScrollUp, 0.7, {
      opacity: 0,
      y: 0
    })
  }
}) // review


// 2022 hot - all__roasterys
new Swiper('.all__roasterys .swiper', {
  slidesPerView: '5',
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 1000
  },
  navigation: {
    prevEl: '.all__roasterys .swiper-button-prev',
    nextEl: '.all__roasterys .swiper-button-next'
  }
})

// 2022 hot - review
new Swiper('.review .swiper', {
  slidesPerView: '4',
  spaceBetween: 30,
  // loop: true,
  pagination: {
    el: ".review .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    prevEl: '.review .swiper-button-prev',
    nextEl: '.review .swiper-button-next'
  }
})

// quick_contents
const quickMenu = document.querySelector('.quick_menu_container')

window.addEventListener('scroll', () => {
  if(window.scrollY > 600){
    gsap.to(quickMenu, 0.3, {
      opacity: 1,
      right: 0
    })
  } else {
    gsap.to(quickMenu, 0.3, {
      opacity: 0,
      right: -50
    })
  }
})

const quickBtn01 = document.querySelector('.quickBtn01')
const quickTooltip01 = document.querySelector('.quick--tooltip01')
const quickBtn02 = document.querySelector('.quickBtn02')
const quickTooltip02 = document.querySelector('.quick--tooltip02')
const quickBtn03 = document.querySelector('.quickBtn03')
const quickTooltip03 = document.querySelector('.quick--tooltip03')
const quickBtn04 = document.querySelector('.quickBtn04')
const quickTooltip04 = document.querySelector('.quick--tooltip04')

quickBtn01.addEventListener('mouseover', () => {
  quickTooltip01.style.display = 'inline-block'
})
quickBtn01.addEventListener('mouseout', () => {
  quickTooltip01.style.display = 'none'
})
quickBtn02.addEventListener('mouseover', () => {
  quickTooltip02.style.display = 'inline-block'
})
quickBtn02.addEventListener('mouseout', () => {
  quickTooltip02.style.display = 'none'
})
quickBtn03.addEventListener('mouseover', () => {
  quickTooltip03.style.display = 'inline-block'
})
quickBtn03.addEventListener('mouseout', () => {
  quickTooltip03.style.display = 'none'
})
quickBtn04.addEventListener('mouseover', () => {
  quickTooltip04.style.display = 'inline-block'
})
quickBtn04.addEventListener('mouseout', () => {
  quickTooltip04.style.display = 'none'
})


// scroll to top btn
const topBtn = document.querySelector('.top_btn')
const bottomBtn = document.querySelector('.down_btn')
const bottomTarget = document.querySelector('.footer')
const rootElement = document.documentElement

topBtn.addEventListener('click', () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}) // top_btn

bottomBtn.addEventListener('click', () => {
  bottomTarget.scrollIntoView({
    behavior: "smooth"
  })
}) // down_btn