const btn=document.querySelector('.btnDwn');
const btn2=document.querySelector('.btnUp');
const counterTxt=document.querySelector('h1');
let counter=0;

const sub=()=>{
    counter=counter-1;
    console.log(counter);
    counterTxt.innerHTML=counter;
    color();
}

const add=()=>{
    counter=counter+1;
    console.log(counter);
    counterTxt.innerHTML=counter; 
    color();
}

const color=()=>{
    if(counter>0) {
        counterTxt.style.color='green';
    }else if(counter<0){
        counterTxt.style.color='red';
    }else{
        counterTxt.style.color='black';
    }

    }

btn.addEventListener('click', sub);
btn2.addEventListener('click', add);