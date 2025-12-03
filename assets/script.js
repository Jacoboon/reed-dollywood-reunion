// Approximate prices used for estimation.
// You can tweak these easily.
const PRICE_ADULT_1DAY = 101;   // ~$101 after tax
const PRICE_ADULT_2DAY = 134;   // ~$134 after tax
// For simplicity, estimate kids/seniors as a bit cheaper:
const PRICE_KID_1DAY = 90;
const PRICE_KID_2DAY = 120;
const PRICE_SENIOR_1DAY = 95;
const PRICE_SENIOR_2DAY = 125;

document.addEventListener("DOMContentLoaded", () => {
  const adultsInput = document.getElementById("adults");
  const kidsInput = document.getElementById("kids");
  const seniorsInput = document.getElementById("seniors");
  const daysSelect = document.getElementById("days");
  const foodPerDayInput = document.getElementById("foodPerDay");
  const calcBtn = document.getElementById("calc-btn");
  const resultNumber = document.querySelector(".budget-number");

  function calculate() {
    const adults = parseInt(adultsInput.value || "0", 10);
    const kids = parseInt(kidsInput.value || "0", 10);
    const seniors = parseInt(seniorsInput.value || "0", 10);
    const days = parseInt(daysSelect.value, 10);
    const foodPerDay = parseFloat(foodPerDayInput.value || "0");

    let ticketTotal = 0;

    if (days === 1) {
      ticketTotal += adults * PRICE_ADULT_1DAY;
      ticketTotal += kids * PRICE_KID_1DAY;
      ticketTotal += seniors * PRICE_SENIOR_1DAY;
    } else {
      ticketTotal += adults * PRICE_ADULT_2DAY;
      ticketTotal += kids * PRICE_KID_2DAY;
      ticketTotal += seniors * PRICE_SENIOR_2DAY;
    }

    const people = adults + kids + seniors;
    const foodTotal = people * days * foodPerDay;

    const total = ticketTotal + foodTotal;

    resultNumber.textContent = `$${total.toFixed(0)}`;
  }

  calcBtn.addEventListener("click", calculate);
});
