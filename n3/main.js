const btn=document.querySelector('button');
const quotes=[
    {
        quote: "In my country, we say to let a woman drive a car is like to let a monkey fly a plane, very dangerous yes." ,
        name:  "Borat the Sexist"
    },
    {
        quote: "I arrived in America's airport with clothings, U.S dollars, and a jar of gypsy tears to protect me from AIDS." ,
        name: "Borat the Racist"
    },
    {
        quote: "May George Bush drink the blood of every man woman and child in Iraq!" ,
        name: "Borat the politician" 
    },
]
let quoteText = document.querySelector('p');
let quotePerson = document.querySelector('h1');

const drawQuote =()=>{
    console.log('Change');
    const quoteIndex=[Math.floor(Math.random() * quotes.length)];
    quoteText.innerHTML=quotes[quoteIndex].quote;
    quotePerson.innerHTML=quotes[quoteIndex].name;
    
}

btn.addEventListener('click', drawQuote);