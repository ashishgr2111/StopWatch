let currTime = 0;
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');
const clock = document.querySelector('.clock');
//--------------------------------------------------------------------------------------------

let t1 = new Date();
t1 = t1.getTime();
displayTime(t1);

function displayTime() {
  let time = new Date();
  time = (time.getTime() - t1)/1000;
  time = Number(time.toFixed()) + Number(currTime);
  clock.textContent = time; 
}      

let createClock = setInterval(displayTime, 1000);
//--------------------------------------------------------------------------------------------   

startBtn.addEventListener('click', function(){
  t1 = new Date();
  t1 = t1.getTime();
  currTime = clock.textContent;
  clearInterval(createClock);
  createClock = setInterval(displayTime, 1000);
})

resetBtn.addEventListener('click', function(){
  currTime = 0;
  clock.textContent = currTime; 
  clearInterval(createClock);
})

stopBtn.addEventListener('click', function(){
  clearInterval(createClock);
})