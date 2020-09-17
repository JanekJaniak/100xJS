const btn=document.querySelectorAll('button');
const image=document.querySelector('.slider');
const bikes=['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
let active =0;

const load=()=>{
  currentImg=bikes[active];
  image.style.backgroundImage = `url(${currentImg})`;
}
load();

btn.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('forward')){
        if(active === bikes.length -1){
          console.log(`if ${active}`);
          active = 0
          currentImg=bikes[active];
          image.style.backgroundImage = `url(${currentImg})`;
        }else{
          console.log(`else ${active}`);  
          active++;
          currentImg=bikes[active];
          image.style.backgroundImage = `url(${currentImg})`;
        }
      }else{
        if(active===0){
          console.log(`if back ${active}`);
          active=bikes.length-1;
          console.log(`if back po ${active}`)
          currentImg=bikes[active];
          image.style.backgroundImage = `url(${currentImg})`;
        }else{
          console.log(`else back ${active}`);
          active--;
          currentImg=bikes[active];
          image.style.backgroundImage = `url(${currentImg})`;
        }

      }
    }
  )
});   