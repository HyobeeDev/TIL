$('.ham_btn').on('click', function(){
  $('.ham_btn').toggleClass('active');
  // $('nav').toggleClass('active');   // 나중에 넣기
})

//search - css 가능
// const search = document.querySelector('#search')

// search.addEventListener('focus', () => {
//     search.setAttribute('placeholder', '검색어를 입력하세요')
// })
// search.addEventListener('blur', () => {
//     search.setAttribute('placeholder', '')
// })





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