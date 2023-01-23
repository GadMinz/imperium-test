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

let interviewStep = 0;
const interviewSteps = $(".interview-questions").toArray();
const interviewProgress = $(".interview-progress-item").toArray();
const interviewNextBtn = $(".interview-btn-next");
const interviewDoneBtn = $(".interview-btn-done");

interviewNextBtn.click((e) => {
  e.preventDefault();
  interviewStep++;
  updateFormStep();
});
interviewDoneBtn.click((e) => {
  e.preventDefault();
  alert("Отправлено");
});

function updateFormStep() {
  $(interviewSteps[interviewStep]).addClass("active");
  $(interviewProgress[interviewStep]).addClass("active");
  $(interviewSteps[interviewStep - 1]).removeClass("active");
  if (interviewStep === 2) {
    interviewNextBtn.hide();
    interviewDoneBtn.show();
  }
}

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
let servicesSlider = new Swiper(".services-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  lazy: true,
  pagination: {
    el: ".services-slider-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".services-slider-next",
    prevEl: ".services-slider-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    680: {
      slidesPerView: 2,
    },
    1040: {
      slidesPerView: 3,
    },
  },
});
