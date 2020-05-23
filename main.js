const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');
const clock = document.querySelector('.clock');
//--------------------------------------------------------------------------------------------

let t1;
let createClock = 0;
let currTime = 0;

function displayTime() {
  let time = new Date();
  time = (time.getTime() - t1)/1000;
  time = Number(time.toFixed()) + Number(currTime);
  clock.textContent = time; 
}      
//--------------------------------------------------------------------------------------------   

startBtn.addEventListener('click', function(){
  if(!createClock){
    t1 = new Date();
    t1 = t1.getTime();
    currTime = clock.textContent;    
    createClock = setInterval(displayTime, 1000);
  }
})

resetBtn.addEventListener('click', function(){
  currTime = 0;
  clock.textContent = currTime; 
  clearInterval(createClock);
  createClock = 0;
})

stopBtn.addEventListener('click', function(){
  clearInterval(createClock);
  createClock = 0;
})