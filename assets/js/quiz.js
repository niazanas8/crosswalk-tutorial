
function gradeQuiz(){
  let score = 0;
  const answers = { q1:'b', q2:'c', q3:'a', q4:'b', q5:'c' };
  Object.keys(answers).forEach(k=>{
    const marked = document.querySelector(`input[name=${k}]:checked`);
    if(marked && marked.value === answers[k]) score++;
  });
  const out = document.getElementById('quiz-result');
  out.textContent = `You scored ${score}/5`;
  out.className = 'badge';
}
