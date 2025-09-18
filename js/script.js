// Data do evento
const countDownDate = new Date("Oct 5, 2025 13:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML = `
    <span>${days}d</span>
    <span>${hours}h</span>
    <span>${minutes}m</span>
    <span>${seconds}s</span>
  `;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown-timer").innerHTML = "O GRANDE DIA CHEGOU!";
  }
}, 1000);
