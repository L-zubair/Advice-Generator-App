const adviceText = document.getElementById('advice-text');
const adviceId = document.getElementById('advice-id');
const diceButton = document.getElementById('dice-button');

diceButton.addEventListener('click', getAdvice);

async function getAdvice() {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    adviceText.textContent = `"${data.slip.advice}"`;
    adviceId.textContent = data.slip.id;
  } catch (error) {
    adviceText.textContent = "Oops! Something went wrong.";
  }
}
