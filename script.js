const originalPriceInput = document.getElementById("originalPriceInput");
const discountPrecentageInput = document.getElementById("discountPrecentageInput");
const finalPrices = document.getElementById("finalPrices");
const btn = document.querySelector('.btn');
const inputs = document.querySelectorAll('input');

// calculate discount
const calculateDiscount = () => {
  const originalPrice = originalPriceInput.value;

  const discountPrecentage = discountPrecentageInput.value / 100;

  const savings = originalPrice * discountPrecentage;

  const finalPrice = originalPrice - savings;

  console.log({ finalPrice: finalPrice, yourSavings: savings });

  finalPrices.innerHTML = `
    <h2>Final price is <span>${finalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</span></h2>
    <p>Your savings will be <span>${savings.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</span></p>
   `;
};

// reset inputs 
btn.addEventListener('click', () => {
  inputs.forEach(input => {
    input.value = '';
  })
  document.querySelectorAll('.app-results span').forEach(span => {
    console.log(span)
    span.textContent = '0.00';
  })
});

// prevent from typing letters
inputs.forEach(input => {
  input.addEventListener('input', () => {
          if (isNaN(Number(input.value))) {
      input.value = '';
    }
  })
});