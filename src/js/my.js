let link = document.querySelector('link');
function reloadWindow(){
    window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
    })
}
function updateWindow() {
    if (window.innerWidth < 768){
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        reloadWindow()
    } else {
        reloadWindow();
        link.href = '#';
    }
}
updateWindow();

const swiperCustom = document.querySelector('.swiper');
var swiper = new Swiper(swiperCustom, {
    slidesPerView: 'auto',
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  
   function test() {
        if (innerWidth >= 768) {
            swiper.disable()
        }
    }

    test();

    

  document.querySelector('.reveal').addEventListener('click', function() {
    const container = document.querySelector('.swiper-wrapper');
    const button = this;
    button.classList.toggle('active');
    container.classList.toggle('active_click');
    button.textContent !== 'Показать все' ? button.textContent = 'Показать все' : button.textContent = 'Скрыть'   ;
    console.log(button)

  });

  //swiper 2 

  function reloadWindow2(){
    window.addEventListener('resize', function () { 
        "use strict";
        window.location.reload(); 
    })
}
function updateWindow2() {
    if (window.innerWidth < 768){
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        reloadWindow2()
    } else {
        reloadWindow();
        link.href = '#';
    }
}
updateWindow2();

  const swiperCustom2 = document.querySelector('.swiper2');
var swiper2 = new Swiper(swiperCustom2, {
    slidesPerView:'auto',
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
  });

  
   function test2() {
        if (innerWidth >= 768) {
            swiper2.disable()
        }
    }

    test2();

    //

    document.querySelector('.reveal_technique').addEventListener('click', function() {
      const container = document.querySelector('.technique_wrapper');
      const button = this;
      button.classList.toggle('active');
      container.classList.toggle('active_click');
      button.textContent !== 'Показать все' ? button.textContent = 'Показать все' : button.textContent = 'Скрыть'   ;
      console.log(button)
  
    });




    // swiper 3
    function reloadWindow3(){
      window.addEventListener('resize', function () { 
          "use strict";
          window.location.reload(); 
      })
  }
  function updateWindow3() {
      if (window.innerWidth < 768){
          link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
          reloadWindow2()
      } else {
          reloadWindow();
          link.href = '#';
      }
  }
  updateWindow3();
  
    const swiperCustom3 = document.querySelector('.swiper3');
  var swiper3 = new Swiper(swiperCustom3, {
      slidesPerView:'auto',
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination3",
        clickable: true,
      },
    });
  
    
     function test3() {
          if (innerWidth >= 768) {
              swiper3.disable()
          }
      }
  
      test3();

  // services  
  const textSecont = document.querySelector(".second-text")
  const textThree = document.querySelector(".three-text")
  document.querySelector('.read-more').addEventListener('click', function() {
    
    const button = this;
    if(innerWidth < 768){
      button.textContent !== 'Читать далее' ? (button.textContent = 'Читать далее', textThree.style = "display:none", textSecont.style = "display:none") : (button.textContent = 'Скрыть',textThree.style = "display:block", textSecont.style = "display:block");
    } else if (innerWidth < 1440){
      button.textContent !== 'Читать далее' ? (button.textContent = 'Читать далее', textThree.style = "display:none") : (button.textContent = 'Скрыть',textThree.style = "display:block");
    } else if (innerWidth > 1440) {

    }
    // const container = document.querySelector('.text_conteiner');
    button.classList.toggle('active');
    // container.classList.toggle('active_click');
});

  

    