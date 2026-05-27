let wrongCount = 0;
let isBlackMode = false;
let textInterval = null;

const bgm = document.getElementById("bgm");
const mainContainer = document.getElementById("mainContainer");
const loveButton = document.getElementById("loveButton");

window.onload = () => {
    bgm.play().catch(() => {
        document.body.addEventListener('click', () => bgm.play(), { once: true });
    });
};

const correctAnswers = ["我愛你", "愛你", "超級愛", "超級愛你", "非常愛你"];

function checkAnswer() {
    const userInput = document.getElementById("answer").value.trim();
    const feedback = document.getElementById("feedback");

    if (userInput === "") {
        feedback.innerHTML = `<span style="color:#dc3545">請輸入答案</span>`;
        return;
    }

    const isCorrect = correctAnswers.some(ans => ans === userInput);

    if (isCorrect) {
        feedback.innerHTML = `<span style="color:#28a745">❤️ 答對了！我也是～</span>`;
    } else {
        wrongCount++;
        handleWrongAnswer(feedback);
    }
}

function handleWrongAnswer(feedback) {
    if (wrongCount === 1) {
        feedback.innerHTML = `<span style="color:#dc3545">你確定嗎？再試一次</span>`;
    } 
    else if (wrongCount === 2) {
        feedback.innerHTML = `<span style="color:#b30000">要不...再試試看？</span>`;
    } 
    else if (wrongCount >= 3 && !isBlackMode) {
        startBlackMode();
    }
}

function startBlackMode() {
    isBlackMode = true;
    document.body.style.backgroundColor = "#000000";
    mainContainer.style.display = "none";   // 隱藏問答區

    // 2秒後開始產生紅色文字
    setTimeout(() => {
        createLoveTexts();
    }, 2000);

    // 10秒後顯示「我愛你」按鈕
    setTimeout(() => {
        loveButton.style.display = "block";
    }, 10000);
}

function createLoveTexts() {
    const container = document.getElementById("loveTexts");
    
    textInterval = setInterval(() => {
        if (document.querySelectorAll(".love-text").length > 50) return;

        const text = document.createElement("div");
        text.className = "love-text";
        text.textContent = "我愛你";
        
        const x = Math.random() * 100 + "vw";
        const y = Math.random() * 85 + "vh";
        
        text.style.left = x;
        text.style.top = y;
        text.style.animationDuration = (Math.random() * 0.7 + 1.3) + "s";
        
        container.appendChild(text);

        setTimeout(() => text.remove(), 3200);
    }, 160);
}

function showFinalScreen() {
    clearInterval(textInterval);
    loveButton.style.display = "none";
    
    const final = document.getElementById("finalMessage");
    final.style.display = "flex";
    final.style.backgroundColor = "#ffe6f0";
    
    final.innerHTML = `
        <div style="text-align:center;">
            <h2 style="font-size:3.8rem; margin-bottom:30px;">我也愛你</h2>
            <p style="font-size:4.5rem;">❤️</p>
        </div>
    `;
}