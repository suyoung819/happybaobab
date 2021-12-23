$(document).ready(function(){ //start

  var swiper01 = new Swiper(".mySwiper01", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });

  var idxLi = $(".page_line li").index(this);
  var idxSlide = $(".swiper-slide").index(this);

  $(".page_line li").click(function(){
    if (idxLi == idxSlide) {
      $(".page_line li").removeClass("on")
      $(this).addClass("on")
    }
  })


  var swiper02 = new Swiper(".mySwiper02", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".mySwiper02 .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      //768px 이상
      768: {
        slidesPerView: 2
      },
      //1100px 이상
      1100: {
        slidesPerView: 4
      }
    }
  });









}); //end