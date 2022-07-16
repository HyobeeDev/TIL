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