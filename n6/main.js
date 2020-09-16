const btn=document.querySelectorAll('button');
const image=document.querySelector('.slider');
const bikes=['b1.jpg', 'b2.jpg', 'b3.jpg'];
let active =0;


btn.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('forward')){
        currentImg=bikes[active];
        image.style.backgroundImage = `url(${currentImg})`;
        active++;
        if(active === bikes.length){
          active = 0
        }

      }
      if (button.classList.contains('back')){

      }
    })
  });