const btn=document.querySelector('button');
const msg=document.querySelector('p');
const input=document.querySelector('input');
const last=document.querySelector('h1');

input.value= '';

const subb=(e)=>{
    e.preventDefault();
    console.log('Subb');
    if(input.value==""){
        last.innerHTML='ENTER NEW MESSAGE!';
        last.style.backgroundColor='white';
        last.style.color='red';
        msg.innerHTML='';

    }else{
    msg.innerHTML=input.value;
    input.value= '';
    last.innerHTML='LAST MESSAGE:';
    last.style=null;
    }
}

btn.addEventListener('click', subb);