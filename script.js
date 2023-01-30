var init = false;
        function swiperCard() {
        if (window.innerWidth <= 768) {
            if (!init) {
              init = true;
              swiper = new Swiper(".mySwiper", {
                slidesPerView: "auto",
                spaceBetween: 16,
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            })
        ;
            }
          } else if (init) {
            swiper.destroy();
            init = false;
          }
        }
        swiperCard();
        window.addEventListener("resize", swiperCard);;



var button = document.getElementById('block');
button.addEventListener('click', function myFunction() {
  if (document.getElementById("main").style.height != "255px") {
    document.getElementById("main").style.height = "255px";
    document.getElementById("block").style.width = "95px";
    document.getElementById("text").innerHTML='Скрыть';
    document.getElementById("block").style.backgroundImage = "url(image/expand.svg)";
  }
  else {
    document.getElementById("text").innerHTML='Показать все';
    document.getElementById("main").style.height = "165px";
    document.getElementById("block").style.width = "126px";
    document.getElementById("block").style.backgroundImage = "url(image/icon.svg)";
  }
});



