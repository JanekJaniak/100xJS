const allSweets =[
    { name:"Sweet Item 1", image:"img/sweet1.jpeg"},
    { name:"Sweet Item 2", image:"img/sweet2.jpeg"},
    { name:"Sweet Item 3", image:"img/sweet3.jpeg"},
    { name:"Cake Item 1", image:"img/cake1.jpeg"},
    { name:"Cake Item 2", image:"img/cake2.jpeg"},
    { name:"Cake Item 3", image:"img/cake3.jpeg"},
    { name:"Cupcake Item 1", image:"img/cupcake1.jpeg"},
    { name:"Cupcake Item 2", image:"img/cupcake2.jpeg"},
    { name:"Cupcake Item 3", image:"img/cupcake3.jpeg"},
    { name:"Donut Item 1", image:"img/donut1.jpeg"},
    { name:"Donut Item 2", image:"img/donut2.jpeg"},
    { name:"Donut Item 3", image:"img/donut3.jpeg"}
];

const sweetsWraper=document.querySelector('.allSweets')
const sweet=document.querySelector('.sweet');   
const sweetsName=document.querySelector('.sweetsName'); 
const sweetsImg=document.querySelector('.sweetsImg img');


const newElement=(item)=>{
    console.log(item.name, item.image);
    sweetsName.innerHTML=item.name;
    sweetsImg.src=item.image;
    // sweet.appendChild(sweetsName);
    // sweet.appendChild(sweetsImg);
    // sweetsWraper.appendChild(sweet)

}

allSweets.forEach(newElement);