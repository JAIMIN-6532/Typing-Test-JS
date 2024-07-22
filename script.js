const sentences = 
  `The quick brown fox jumps over the lazy dog . Sphinx of black quartz, judge my vow . Pack my box with five dozen liquor jugs . How vexingly quick daft zebras jump !`
;

let currentSentenceIndex = 0;
let startTime, endTime;
let timerInterval;

const sentenceElement = document.getElementById("sentence");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const speedElement = document.getElementById("speed");
const accuracyElement = document.getElementById("accuracy");
const resultElement = document.getElementById("result");
const retryButton = document.getElementById("retry-btn");

function startTest() {
  sentenceElement.innerHTML = sentences;
  inputElement.value = "";
  inputElement.disabled = false;
  inputElement.focus();
  startButton.disabled = true;
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);

    setTimeout(endTest, 30000); // End the test after 30 seconds
}

function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  const remainingTime = 30 - elapsedTime;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  timerElement.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function endTest() {
  clearInterval(timerInterval);
  endTime = new Date();
  const elapsedTime = Math.floor((endTime - startTime) / 1000);
  const typedSentence = inputElement.value.trim();
  const correctSentence = sentenceElement.textContent.trim();
  
  let speed = 0;
  let typedWords = [];
  if(typedSentence != ""){
    typedWords = typedSentence.split(" ");
  }
  
  const correctWords = correctSentence.split(" ");
  console.log(correctWords);
  let correctCount = 0;
  let ind =0;
  typedWords.forEach((word, index) => {
    if (word === correctWords[index]) {
      correctCount++;
      ind =index;
    }
  });
  if(typedSentence != ""){
    speed = Math.floor(((correctCount) / 30) * 60);
  }
  const accuracy = (correctCount / correctWords.length  ) * 100;
  speedElement.textContent = speed;
  accuracyElement.textContent = accuracy.toFixed(2);
  resultElement.style.display = "block";
  retryButton.focus();
}

startButton.addEventListener("click", startTest);

retryButton.addEventListener("click", () => {
  resultElement.style.display = "none";
  startButton.disabled = false;
  inputElement.value = "";
  InputEvent.disabled = true;
});



// const sentences = 
//   `The quick brown fox jumps over the lazy dog.
//   Sphinx of black quartz, judge my vow.
//   Pack my box with five dozen liquor jugs.
//   How vexingly quick daft zebras jump!`
// ;

// const para = document.querySelector("#sentence");
// const StartBtn = document.querySelector("#start-btn");
// const input = document.querySelector("#input");
// const timer = document.querySelector("#timer");
// const result = document.querySelector("#result");
// const reset = document.querySelector("#retry-btn");
// const speed = document.querySelector("#speed");
// const accuracy = document.querySelector("#accuracy");

// timer.textContent = "00:00";
// let seconds = 30;
// let correctWords = 0;
// let correctChar = 0;
// let typedPara = "";
// let totalChar = sentences.replace(/\s+/g, '').length; // Total characters without spaces

// function calculateSpeed(correctWords, seconds) {
//     return (correctWords / (30)) * 60;
// }

// function calculateAccuracy(correctChar, totalChar) {
//     return Math.min((correctChar / totalChar) * 100, 100); // Ensure accuracy does not exceed 100%
// }

// StartBtn.addEventListener("click",starts);

// function starts(){
//     input.disabled = false;
//     para.textContent = sentences;
//     StartBtn.disabled = true;
//     // seconds = 30; // Reset the timer
//     correctWords = 0;
//     correctChar = 0;
//     timer.textContent = `00:30`;
//     input.value = '';
//     input.focus();
    
// 	startTimer();
    
    
// }

// function startTimer(){
//     let timeout = setInterval(() => {
//         seconds--;
       
//         if (seconds > 9) {
//             timer.textContent = `00:${seconds}`;
         
//         } else if(seconds >=0 && seconds<=9) {
//                timer.textContent = `00:0${seconds}`;
//         }
//         if (seconds === 0) {
//             timerEnd();
// }

// function timerEnd(){
//      		clearInterval(timeout);
//             result.style.display = "block";
//             typedPara = input.value.trim();
//             input.disabled = true;
//             let sentWords = sentences.split(/\s+/);
//             let typedWords = typedPara.split(/\s+/);

//             typedWords.forEach((word, index) => {
//                 if (word === sentWords[index]) {
//                     correctWords++;
//                 }
//             });

//             typedPara.split('').forEach((char, index) => {
//                 if (char === sentences[index]) {
//                     correctChar++;
//                 }
//             });

//             speed.textContent = calculateSpeed(correctWords,0).toFixed(2);
//             accuracy.textContent = calculateAccuracy(correctChar, totalChar).toFixed(2);
//         }
//     }, 1000);
// }

// input.addEventListener("input", (e) => {
//     let typedText = input.value;
//     correctChar = 0;
//     for (let i = 0; i < typedText.length; i++) {
//         if (typedText[i] === sentences[i]) {
//             correctChar++;
//         }
//     }
// });

// reset.addEventListener("click", () => {
//     StartBtn.disabled = false;
//     result.style.display = "none";
//     input.value = "";
//     para.textContent = "";
//     timer.textContent = "00:00";
//     input.disabled = true;
//     correctWords = 0;
//     correctChar = 0;
// });



// // //Complete the given scaffold to implement all the functionalities mentioned in the problem Statement.
// // const sentences = 
// //   `The quick brown fox jumps over the lazy dog.
// //   Sphinx of black quartz, judge my vow.
// //   Pack my box with five dozen liquor jugs.
// //   How vexingly quick daft zebras jump!`
// // ;

// // const para = document.querySelector("#sentence");
// // const StartBtn = document.querySelector("#start-btn");
// // const input = document.querySelector("#input");
// // const timer = document.querySelector("#timer");
// // const result = document.querySelector("#result");
// // const reset = document.querySelector("#retry-btn");
// // const speed = document.querySelector("#speed");
// // const accuracy = document.querySelector("#accuracy");

// // timer.textContent = "00:00";
// // let seconds = 10;
// // let correctWords = 0;
// // let correctChar = 0;
// // let typedPara = "";
// // let typedWords  = "";
// // let typedChar = "";
// // let totalChars = sentences.split("");
// // let totalChar = totalChars.length;


// // StartBtn.addEventListener("click",()=>{
// //     input.disabled= false;
// //     para.textContent = sentences;
// //     StartBtn.disabled = true;
// //     let timeout = setInterval(()=>{
// //         seconds--;
       
// //         if(seconds <= 9){
// //             timer.textContent = `00:0${seconds}`;
// //         }
// //         else{
// //              timer.textContent = `00:${seconds}`;
// //         }
// //         if(seconds === 0 ) {
// //             clearInterval(timeout);
// //             result.style.display = "block";
// //             typedPara = input.value;
// //             input.disabled= true;
// //             typedWords = typedPara.split(" ");
// //             let sentWords = sentences.split(" ");
// //             typedWords.forEach((word,index)=>{
// //                 if(i === sentences[i]){
// //                     correctWords++;
// //                 }
// //             })
// //             speed.textContent = `${(correctWords/seconds)*60}`;
// //             accuracy.textContent = `${(correctChar/totalChar)*100}`;
// //         }
// //     },1000);
// // })

// // input.addEventListener("keydown",(e)=>{
// //     for(let i=0;i<sentences.length;i++){
// //         if(e.key === sentences[i]){
// //             correctChar++;
// //         }
// //     }   
   
// // })


// // reset.addEventListener("click",()=>{
// //     StartBtn.disabled = false;
// //     result.style.display = "none";
// //     input.value = "";
// // })
