document.addEventListener("DOMContentLoaded", function() {
    const desc = document.querySelector('.desc');

    desc.classList.add('visible');
});

const swiper = new Swiper('.swiper', {
     direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,

  pagination: {
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});


boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {

  const triggerBottom = window.innerHeight / 5 * 4
  boxes.forEach(box => {

    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom ){
      box.classList.add('show');
    }else{

      box.classList.remove('show');
    }
    
  });
}

