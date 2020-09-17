const btn=document.querySelectorAll('button');
const image=document.querySelector('.slider');
const bikes=['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
let active =0;

const load=()=>{
  currentImg=bikes[active];
  image.style.backgroundImage = `url(${currentImg})`;
}
load();

const changeImg=()=>{
  currentImg=bikes[active];
  image.style.backgroundImage = `url(${currentImg})`;
}

btn.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('forward')){
        if(active === bikes.length -1){        
          active = 0
        }else{
          active++;
        }
        changeImg();
      }else{
        if(active===0){
          active=bikes.length-1;
        }else{
          active--;
        }
        changeImg();
      }
    }
  )
});   