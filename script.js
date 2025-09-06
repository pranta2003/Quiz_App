const QUESTIONS = [
  { q: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], answer: 0 },
  { q: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Styling System", "Computer Style Syntax"], answer: 1 },
  { q: "Inside which HTML element do we put the JavaScript?", options: ["<javascript>", "<scripting>", "<script>", "<js>"], answer: 2 },
  { q: "Which array method creates a new array with elements that pass a test?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: 2 },
  { q: "Which CSS property controls the text size?", options: ["font-weight", "text-size", "font-style", "font-size"], answer: 3 },
  { q: "What is the output of: console.log(typeof NaN)?", options: ["'number'", "'NaN'", "'undefined'", "'object'"], answer: 0 },
  { q: "Which HTML attribute is used to define inline styles?", options: ["class", "style", "font", "styles"], answer: 1 },
  { q: "How do you write an arrow function in JavaScript?", options: ["function => {}", "() => {}", "=> function () {}", "function() => {}"], answer: 1 },
  { q: "What does DOM stand for?", options: ["Document Object Model","Data Object Management","Digital Ordinance Model","Desktop Oriented Mode"], answer: 0 },
  { q: "Which CSS layout is best for creating two-dimensional layouts?", options: ["Flexbox","Grid","Float","Position"], answer: 1 }
];

const startScreen = document.getElementById("startScreen");
const quizScreen   = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const scoreEl   = document.getElementById("score");
const qIndexEl  = document.getElementById("qIndex");
const qTotalEl  = document.getElementById("qTotal");
const bestScoreEl = document.getElementById("bestScore");

const secsPerQEl = document.getElementById("secsPerQ");
const timeLeftEl = document.getElementById("timeLeft");
const timeBarEl  = document.getElementById("timeBar");

const questionTextEl = document.getElementById("questionText");
const optionsEl = document.getElementById("options");

const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const playAgainBtn = document.getElementById("playAgainBtn");

const numQuestionsSelect = document.getElementById("numQuestions");
const shuffleToggle = document.getElementById("shuffleToggle");
const timePerQuestionInput = document.getElementById("timePerQuestion");
const reviewEl = document.getElementById("review");
const bestBadge = document.getElementById("bestBadge");
const finalScoreEl = document.getElementById("finalScore");
const finalTotalEl = document.getElementById("finalTotal");

let settings = { totalQuestions: 10, timePerQuestion: 15, shuffle: true };
let pool = [], index = 0, score = 0, timerId = null, timeLeft = 0, answered = false, answersReview = [];
const HIGH_SCORE_KEY = "quizHighScoreV1";

function loadHighScore(){ const val = localStorage.getItem(HIGH_SCORE_KEY); const n = val ? parseInt(val,10):0; bestScoreEl.textContent=n; return n; }
function maybeSaveHighScore(newScore){ const old=loadHighScore(); if(newScore>old){ localStorage.setItem(HIGH_SCORE_KEY,String(newScore)); bestBadge.hidden=false;} else bestBadge.hidden=true; bestScoreEl.textContent=localStorage.getItem(HIGH_SCORE_KEY)??"0"; }
function shuffle(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]]}return arr;}
function show(el){ el.classList.add("show"); }
function hide(el){ el.classList.remove("show"); }
function setScreen(name){ hide(startScreen); hide(quizScreen); hide(resultScreen); if(name==="start") show(startScreen); if(name==="quiz") show(quizScreen); if(name==="result") show(resultScreen); }

function renderOptions(opts){
  optionsEl.innerHTML="";
  opts.forEach((text,i)=>{
    const li=document.createElement("li");
    const btn=document.createElement("button");
    btn.className="option";
    btn.innerHTML=`<span class="option__index">${String.fromCharCode(65+i)}</span><span>${text}</span>`;
    btn.addEventListener("click",()=> selectAnswer(i));
    li.appendChild(btn);
    optionsEl.appendChild(li);
  });
}

function renderQuestion(){
  nextBtn.disabled=true;
  answered=false;
  const q=pool[index];
  qIndexEl.textContent=index+1;
  qTotalEl.textContent=pool.length;
  questionTextEl.textContent=q.q;
  renderOptions(q.options);
  startTimer();
}

function startTimer(){
  clearInterval(timerId);
  timeLeft=settings.timePerQuestion;
  secsPerQEl.textContent=settings.timePerQuestion;
  timeLeftEl.textContent=timeLeft;
  timeBarEl.style.width="100%";
  timerId=setInterval(()=>{
    timeLeft--;
    timeLeftEl.textContent=timeLeft;
    const pct=Math.max(0,(timeLeft/settings.timePerQuestion)*100);
    timeBarEl.style.width=pct+"%";
    if(timeLeft<=0){ clearInterval(timerId); lockOptions(-1); answersReview.push({q:pool[index].q,chosen:null,correctIndex:pool[index].answer}); nextBtn.disabled=false; }
  },1000);
}

function selectAnswer(choice){
  if(answered) return;
  answered=true;
  clearInterval(timerId);
  lockOptions(choice);
  answersReview.push({q:pool[index].q,chosen:choice,correctIndex:pool[index].answer});
  nextBtn.disabled=false;
}

function lockOptions(selected){
  const buttons = optionsEl.querySelectorAll(".option");
  buttons.forEach((btn,i)=>{
    btn.disabled=true;
    if(i===pool[index].answer) btn.classList.add("correct");
    if(selected===i && selected!==pool[index].answer) btn.classList.add("wrong");
  });
  if(selected===pool[index].answer) score++;
  scoreEl.textContent=score;
}

function nextQuestion(){
  index++;
  if(index<pool.length) renderQuestion();
  else showResult();
}

function showResult(){
  setScreen("result");
  finalScoreEl.textContent=score;
  finalTotalEl.textContent=pool.length;
  maybeSaveHighScore(score);
  renderReview();
}

function renderReview(){
  reviewEl.innerHTML="";
  answersReview.forEach(a=>{
    const div=document.createElement("div");
    div.className="review-item";
    div.innerHTML=`<p class="q">${a.q}</p>
      <p class="a">Your Answer: ${a.chosen!=null?String.fromCharCode(65+a.chosen):"<em>Unanswered</em>"} ${a.chosen===a.correctIndex?'<span class="good">✔</span>':'<span class="bad">✖</span>'}</p>
      <p class="a">Correct Answer: ${String.fromCharCode(65+a.correctIndex)}</p>`;
    reviewEl.appendChild(div);
  });
}

function startQuiz(){
  settings.totalQuestions=parseInt(numQuestionsSelect.value,10);
  settings.shuffle=shuffleToggle.checked;
  settings.timePerQuestion=parseInt(timePerQuestionInput.value,10);
  pool=QUESTIONS.slice(0);
  if(settings.shuffle) pool=shuffle(pool);
  pool=pool.slice(0,settings.totalQuestions);
  index=0; score=0; answersReview=[];
  scoreEl.textContent=score;
  setScreen("quiz");
  renderQuestion();
}

startBtn.addEventListener("click",startQuiz);
nextBtn.addEventListener("click",nextQuestion);
restartBtn.addEventListener("click",()=>setScreen("start"));
playAgainBtn.addEventListener("click",startQuiz);

loadHighScore();
setScreen("start");
