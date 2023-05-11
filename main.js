let start = document.querySelector('.start')
let first = document.querySelector('.first')
let second = document.querySelector('.second')
//let end = document.querySelector('.end')
let third = document.querySelector('.third')

const minutesBlock=document.querySelector('.js-minutes'),
 secondsBlock=document.querySelector('.js-seconds'),
 hundrethsSecondBlock=document.querySelector('.js-hundreths-second'),
 btnStart=document.querySelector('.js-btn-start'),
 btnStop=document.querySelector('.js-btn-stop'),
 btnReset=document.querySelector('.js-btn-reset');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

start.addEventListener('click', function() {
  first.style.display = "none";
  second.style.display = "block";
})

const startTimer=()=>{
    milliseconds++;
    //milliseconds += 1000;

    
    if(milliseconds<=99){
        hundrethsSecondBlock.innerHTML=milliseconds;
    }
    if(milliseconds == 100){
        hundrethsSecondBlock.innerHTML='00';
    }
    if (milliseconds > 99){
        seconds++;
        secondsBlock.innerHTML= '0'+ seconds;

        milliseconds = 0;
    }
    if(seconds > 9){
        secondsBlock.innerHTML= seconds;
    }
    if(seconds > 59){
        minutes++;
        minutesBlock.innerHTML= '0' + minutes;

        seconds =0;
        secondsBlock.innerHTML='0'+seconds;
    }
    if(minutes>9){
        minutesBlock.innerHTML=minutes
    }

}
//miliseconds++-uvelichaivaet milisecundi na 1   (++)




let allCards = document.querySelectorAll('.memory-card');
let activeCards = [];
let guessedCards = [];

for (let i = 0; i < allCards.length; i++) {
  allCards[i].addEventListener('click', function (e) {
    if (guessedCards.includes(allCards[i]) || activeCards.includes(allCards[i])) {
      return
    }

    allCards[i].classList.add('active')
    activeCards.push(allCards[i])

    if (activeCards.length === 3) {
      if (activeCards[0].textContent === activeCards[1].textContent) {
        guessedCards.push(activeCards[0])
        guessedCards.push(activeCards[1])
        activeCards = activeCards.slice(2)
      } else {
        activeCards[0].classList.remove('active')
        activeCards[1].classList.remove('active')
        activeCards = activeCards.slice(2)
      }
    }
  });
}