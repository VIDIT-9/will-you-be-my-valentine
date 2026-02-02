const messages = [
    "😏 NO? Really??",
    "🙄 Wow. Bold of you.",
    "🥲 My confidence just died.",
    "💔 Congratulations, you hurt pixels.",
    "😤 I trusted you.",
    "😒 Even the YES button is judging you.",
    "🫠 This is emotional damage.",
    "🤨 Are you enjoying this?",
    "😑 Plot twist: YES was the right answer.",
    "😩 The NO button is working too well.",
    "😈 You think you’re strong? Click YES.",
    "😂 Okay okay, you win… now press YES.",
    "🥺 Last warning before I cry.",
    "😭 I am literally crying in JavaScript.",
    "😍 JUST KIDDING — PRESS YES ❤️"
];

let messageIndex = 0;
let isTyping = false;

// Typing animation + sound
function typeText(element, text, speed = 45) {
    element.textContent = "";
    let index = 0;
    const sound = document.getElementById("typeSound");

    const typing = setInterval(() => {
        element.textContent += text.charAt(index);

        sound.currentTime = 0;
        sound.play();

        index++;

        if (index === text.length) {
            clearInterval(typing);
        }
    }, speed);
}

function handleNoClick() {
    if (isTyping) return;

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    isTyping = true;

    // Shake NO button
    noButton.classList.add("shake");
    setTimeout(() => noButton.classList.remove("shake"), 400);

    // Type message
    typeText(noButton, messages[messageIndex]);

    messageIndex = (messageIndex + 1) % messages.length;

    // Grow YES button
    const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
);

if (currentSize < 40) {
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

    setTimeout(() => {
        isTyping = false;
    }, 1200);
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
