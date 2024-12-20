const bells = new Audio('bell.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const resetBtn = document.querySelector('.btn-reset');
const session = document.querySelector('.minutes'); 
const seconds = document.querySelector('.seconds'); 
let myInterval; 
let state = true;

// Timer function
const appTimer = () => {
    const sessionAmount = Number.parseInt(session.textContent)
    const secondsAmount = Number.parseInt(seconds.textContent)
  
    if(state) 
    {
      startBtn.textContent = 'Pause'
      state = false;
      let totalSeconds = sessionAmount * 60 + secondsAmount;
  
      const updateSeconds = () => {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');
      
        totalSeconds--;
      
        let minutesLeft = Math.floor(totalSeconds/60);
        let secondsLeft = totalSeconds % 60;
      
        if(secondsLeft < 10) {
          secondDiv.textContent = '0' + secondsLeft;
        } else {
          secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`
      
        if(minutesLeft === 0 && secondsLeft === 0) {
          bells.play()
          clearInterval(myInterval);
        }
      }
      myInterval = setInterval(updateSeconds, 1000);
    } else {
      startBtn.textContent = 'Start'
      state = true;
      clearInterval(myInterval);
    }
  }
const resetTimer = () => {
  clearInterval(myInterval);
  state = true;
  document.querySelector('.minutes').textContent = '25';
  document.querySelector('.seconds').textContent = '00'; 
  startBtn.textContent = "Start"
}

startBtn.addEventListener("click", appTimer)
resetBtn.addEventListener("click", resetTimer)
