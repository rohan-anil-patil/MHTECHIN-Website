// ===Navbar section===
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("menu-open");
});
/**
  Swiper:
  https://swiperjs.com/
**/
const swiper1 = new Swiper(".swiperCarousel", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 10,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
    const { className } = slide;
    if (className.includes("swiper-slide-next")) {
      swiper.slideNext();
    } else if (className.includes("swiper-slide-prev")) {
      swiper.slidePrev();
    }
  });
}

function resizeTextToFit() {
  const quoteEls = document.getElementsByClassName("quote");
  for (const el of quoteEls) {
    el.style.width = el.offsetWidth;
    el.style.height = el.offsetHeight;
  }
  textFit(quoteEls, { maxFontSize: 14 });
}
resizeTextToFit();
addEventListener("resize", (event) => {
  resizeTextToFit();
});
$(document).ready(function () {
  var $window = $(window);
  var $animes = $(".animes");

  var phoneview = window.matchMedia("only screen and (max-width: 600px)");
  if (phoneview.matches) {
    $animes.removeClass("animes");
  }

  function findifinshow() {
    var windowuprole = $window.scrollTop();
    var windowlength = $window.height();
    var windowBottomPosition = windowuprole + windowlength;

    $.each($animes, function () {
      var $element = $(this);
      var elementlength = $element.outerHeight();
      var elementuprole = $element.offset().top;
      var elementBottomPosition = elementuprole + elementlength;

      if (
        elementBottomPosition >= windowuprole &&
        elementuprole <= windowBottomPosition
      ) {
        $element.addClass("in-show");
      } else {
        $element.removeClass("in-show");
      }
    });
  }

  $window.on("scroll resize", findifinshow);
  $window.trigger("scroll");
});
// technology section
let imgBx = document.querySelectorAll(".imgBx");
let contentBx = document.querySelectorAll(".contentBx");
for (let i = 0; i < imgBx.length; i++) {
  imgBx[i].addEventListener("mouseover", function () {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "contentBx";
    }
    document.getElementById(this.dataset.id).className = "contentBx active";
    for (let i = 0; i < imgBx.length; i++) {
      imgBx[i].className = "imgBx";
    }
    this.className = "imgBx active";
  });
}

