$(".navigation-open").click(() => {
  $(".navigation").addClass("open");
  $("body").addClass("lock");
});

$(window).click(function () {
  $(".navigation").removeClass("open");
  $("body").removeClass("lock");
});

$(".navigation").click(() => {
  event.stopPropagation();
});

let bestSlider = new Swiper(".best-slider", {
  slidesPerView: 4,
  spaceBetween: 32,
  loop: true,
  lazy: true,
  pagination: {
    el: ".best-slider-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".best-slider-next",
    prevEl: ".best-slider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    870: {
      slidesPerView: 3,
    },
    1150: {
      slidesPerView: 4,
    },
  },
});
