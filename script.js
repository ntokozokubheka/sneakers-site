const slides= document.querySelector('slide');
const left =getElementById('left');
const right =getElementById('left');
const SLIDE_COUNT =slides.length;
let current_slides=0;


left.addEventListener('click', () => {
  
  current_slide--;
    if (current_slide < 0) {
        current_slide = SLIDES_COUNT - 1;
    }
  
    updateCarouse();
  
)};

right.addEventListener('click', () => {
  
  current_slide++;
    if (current_slide > SLIDES_COUNT - 1) {
        current_slide = 0;
    }
  
    updateCarouse();
)};

    function updateCarouse(){
      
      carousel.style.transform = `translateX(${
        -current_slide * slides[0].offsetWidth
    }px)`;

    document.body.style.background = `#${slides[current_slide].getAttribute(
        "data-bg"
    )}`;
      
    }