<!-- 🌟 Stylish Animated README for Quiz App -->

<div style="text-align:center; font-family:'Inter', sans-serif; color:#e6e9f2; background:#0f1220; padding:40px 20px; border-radius:20px; box-shadow:0 10px 30px rgba(0,0,0,.35);">

  <!-- Title -->
  <h1 style="font-size:3em; margin-bottom:15px; background:linear-gradient(90deg, #6c8cff, #5375ff); -webkit-background-clip:text; color:transparent; animation:glow 2s ease-in-out infinite alternate;">
    🧠 Quiz App
  </h1>

  <p style="font-size:1.2em; color:#9aa3b2; max-width:700px; margin:auto;">
    Test your knowledge in <strong>HTML, CSS & JavaScript</strong> with a fully interactive, timed multiple-choice quiz! Track scores, review answers, and challenge yourself.
  </p>

  <!-- Buttons -->
  <div style="margin-top:30px;">
    <a href="#" style="text-decoration:none; margin:0 10px;">
      <button style="background:linear-gradient(90deg,#6c8cff,#5375ff); color:white; padding:12px 24px; border:none; border-radius:12px; font-weight:700; cursor:pointer; transition: transform .2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
        ⭐ Star on GitHub
      </button>
    </a>
    <a href="#" style="text-decoration:none; margin:0 10px;">
      <button style="background:#0c1021; color:#6c8cff; border:1px solid #6c8cff; padding:12px 24px; border-radius:12px; font-weight:700; cursor:pointer; transition: transform .2s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
        💻 Live Demo
      </button>
    </a>
  </div>

  <!-- Features -->
  <div style="margin-top:40px; text-align:left; max-width:720px; margin:auto;">
    <h2 style="color:#6c8cff;">✨ Features:</h2>
    <ul style="line-height:1.8; font-size:1em; list-style:none; padding-left:0;">
      <li>✅ <i class="fa fa-clock"></i> Timed questions with countdown & progress bar</li>
      <li>✅ <i class="fa fa-question-circle"></i> Multiple-choice questions (default 10)</li>
      <li>✅ <i class="fa fa-random"></i> Option to shuffle questions each game</li>
      <li>✅ <i class="fa fa-trophy"></i> Score tracking & high score saved in localStorage</li>
      <li>✅ <i class="fa fa-book"></i> Review all answers at the end</li>
      <li>✅ <i class="fa fa-mobile-alt"></i> Fully responsive & animated UI</li>
    </ul>

 <!-- Technologies -->
 <h2 style="color:#6c8cff; margin-top:30px;">💻 Technologies Used:</h2>
    <p style="font-size:1em; line-height:1.6;">
      HTML5, CSS3 (animations & gradients), JavaScript (vanilla), <strong>localStorage API</strong>
    </p>

    <!-- Installation -->

  <h2 style="color:#6c8cff; margin-top:30px;">⚡ Installation & Usage:</h2>
    <ol style="line-height:1.8; font-size:1em;">
      <li>Clone or download this repository.</li>
      <li>Open <code>index.html</code> in your browser.</li>
      <li>Customize settings: number of questions, time per question, shuffle.</li>
      <li>Start the quiz and test your knowledge!</li>
    </ol>

    <!-- Screenshots -->
   <h2 style="color:#6c8cff; margin-top:30px;">📸 Screenshots:</h2>
    <p style="font-size:1em;">(Add screenshots of your Quiz App here for better GitHub presentation)</p>
![quiz](https://github.com/user-attachments/assets/a94fc5f7-fff6-4cf8-a3b4-a7cb834f92f0)
<p>Quiz Formate is</p>
![quiz_question](https://github.com/user-attachments/assets/4646dcef-8711-4427-9e6e-82f617cd65db)


  </div>
</div>

<!-- Glow Animation -->
<style>
@keyframes glow {
  0% { text-shadow: 0 0 5px #6c8cff, 0 0 10px #6c8cff, 0 0 20px #6c8cff; }
  50% { text-shadow: 0 0 15px #5375ff, 0 0 25px #5375ff, 0 0 35px #6c8cff; }
  100% { text-shadow: 0 0 5px #6c8cff, 0 0 10px #5375ff, 0 0 20px #6c8cff; }
}

/* Icon animation */
ul li i {
  margin-right:8px;
  color:#5375ff;
  animation: bounce 1.5s infinite alternate;
}

@keyframes bounce {
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
}
</style>

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
