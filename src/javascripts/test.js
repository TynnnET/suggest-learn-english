const timerPopup = document.createElement("div");
timerPopup.style.position = "fixed";
timerPopup.style.top = "20px";
timerPopup.style.right = "20px";
timerPopup.style.background = "#fff";
timerPopup.style.border = "1px solid #ccc";
timerPopup.style.padding = "16px 24px";
timerPopup.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
timerPopup.style.zIndex = "9999";
timerPopup.style.fontSize = "18px";
timerPopup.style.borderRadius = "8px";
timerPopup.textContent = "Time: 20:00";
document.body.appendChild(timerPopup);

let timeLeft = 1200;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerPopup.textContent = `Time: ${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
  if (timeLeft > 0) {
    timeLeft--;
    setTimeout(updateTimer, 1000);
  } else {
    timerPopup.textContent = "Time's up!";
    document
      .querySelector("form")
      .querySelectorAll("input")
      .forEach((i) => (i.disabled = true));
  }
}

updateTimer();
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const answers = [
    { name: "q1", correct: "c" },
    { name: "q2", correct: "d" },
    { name: "q3", correct: "b" },
    { name: "q4", correct: "c" },
    { name: "q5", correct: "c" },
  ];
  answers.forEach((q) => {
    const radios = document.querySelectorAll(`input[name="${q.name}"]`);
    radios.forEach((radio) => {
      const span = radio.nextElementSibling;
      // Reset color
      span.style.color = "";
      if (radio.checked) {
        if (radio.value === q.correct) {
          span.style.color = "#5CB338";
        } else {
          span.style.color = "#DC2525";
        }
      }
    });
  });
});
