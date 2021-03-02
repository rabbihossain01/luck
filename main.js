
// Game values
let min = 1,
  max = 3;

// UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');


// // Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// randon number

guessBtn.addEventListener('click', function () {
  const number = Math.floor(Math.random() * 2 + 1);

  // display block
  document.querySelector('.loding').style.display = 'block';
  if (guessInput.value == '' || guessInput.value < min || guessInput.value > max) {
    alert('Please select the 1 & 3 number')
    document.querySelector('.loding').style.display = 'none';
  } else if (guessInput.value == number) {


    // set timeout
    setTimeout(() => {
      document.querySelector('.loding').style.display = 'none';
      document.querySelector('.winnig').style.display = 'block';
      document.querySelector('.losing').style.display = 'none';
      setMessage(`You Are Win`, 'green')
    }, 2000);
  } else {
    setTimeout(() => {
      document.querySelector('.loding').style.display = 'none';
      document.querySelector('.losing').style.display = 'block';
      document.querySelector('.winnig').style.display = 'none';
    }, 2000);
  }
})

function setMessage(meg, color) {
  message.style.color = color;
  message.textContent = meg;
}