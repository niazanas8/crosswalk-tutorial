// assets/js/quiz.js
(function () {
  // Answer key (by value attribute)
  const ANSWERS = {
    q1: "b", // Low contrast & worn paint
    q2: "c", // mIoU
    q3: "a", // Language-conditioned reasoning
    q4: "b", // FPS / latency
    q5: "c"  // Robust night-time performance
  };

  function getChoice(name) {
    const el = document.querySelector(`input[name="${name}"]:checked`);
    return el ? el.value : null;
  }

  function clearHighlights() {
    document.querySelectorAll(".quiz label").forEach(l => {
      l.classList.remove("correct");
      l.classList.remove("incorrect");
    });
  }

  function highlight(name, correctVal) {
    // highlight the correct label
    const correct = document.querySelector(`input[name="${name}"][value="${correctVal}"]`);
    if (correct) correct.parentElement.classList.add("correct");

    // if user chose a wrong one, highlight their choice as incorrect
    const chosen = document.querySelector(`input[name="${name}"]:checked`);
    if (chosen && chosen.value !== correctVal) {
      chosen.parentElement.classList.add("incorrect");
    }
  }

  // expose a global so the button onclick="gradeQuiz()" works
  window.gradeQuiz = function () {
    clearHighlights();

    let score = 0;
    let total = Object.keys(ANSWERS).length;
    Object.entries(ANSWERS).forEach(([q, ans]) => {
      const choice = getChoice(q);
      if (choice === ans) score++;
      highlight(q, ans);
    });

    const msg = (score === total)
      ? `Perfect! ${score}/${total} 🎉`
      : `You scored ${score}/${total}. Correct answers are highlighted in green.`;

    const resultEl = document.getElementById("quiz-result");
    if (resultEl) {
      resultEl.textContent = msg;
      resultEl.classList.add("show");
      // announce for screen readers
      resultEl.setAttribute("role", "status");
      resultEl.setAttribute("aria-live", "polite");
    }
  };
})();
