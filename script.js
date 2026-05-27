const correctAnswers = [
    "我愛你",
    "愛你",
    "超級愛",
    "超級愛你",
    "非常愛你"
];

function checkAnswer() {
    const userInput = document.getElementById("answer").value.trim();
    const feedback = document.getElementById("feedback");

    // 清空之前的提示
    feedback.innerHTML = "";

    if (userInput === "") {
        feedback.innerHTML = `<span class="incorrect">請輸入答案</span>`;
        return;
    }

    // 檢查是否為正確答案
    const isCorrect = correctAnswers.some(ans => ans === userInput);

    if (isCorrect) {
        feedback.innerHTML = `<span class="correct">❤️ 答對了！我也是～</span>`;
    } else {
        feedback.innerHTML = `<span class="incorrect">你確定嗎？再試一次</span>`;
    }
}