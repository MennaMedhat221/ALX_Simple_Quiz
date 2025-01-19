function checkAnswer() {
    const corectAnswer = "4";
    const userAnswer =  document.querySelector('input[name="quiz"]:checked').value;
    
    if(corectAnswer === userAnswer){
    const feedback = document.getElementById("feedback");
    feedback.innerHTML = "Correct! Well done.";
}else {
    const feedback = document.getElementById("feedback");
    feedback.innerHTML = "That's incorrect. Try again!";
}
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);