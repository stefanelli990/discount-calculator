const originalPriceInput = document.getElementById("originalPriceInput");
const finalPrices = document.getElementById("finalPrices");
const btn = document.querySelector('.btn');
const inputs = document.querySelectorAll('input');

const sliderRange = document.getElementById('sliderRange');
const sliderOutput = document.getElementById('sliderOutput');


sliderRange.addEventListener("input", () => {
  setBubble(sliderRange, sliderOutput);
});
sliderOutput.value = 50;
function setBubble(sliderRange, sliderOutput) {
  const val = sliderRange.value;
  const min = sliderRange.min ? sliderRange.min : 0;
  const max = sliderRange.max ? sliderRange.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  sliderOutput.value = val;

  sliderOutput.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
  console.log(sliderOutput.value)
}


// calculate discount
const calculateDiscount = () => {
 
  const originalPrice = originalPriceInput.value;
  const discountPrecentage = sliderOutput.value / 100;
  const savings = originalPrice * discountPrecentage;
  const finalPrice = originalPrice - savings;

  finalPrices.innerHTML = `
    <h2>Final price is <span>${finalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</span></h2>
    <p>Your savings will be <span>${savings.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</span></p>
   `;
};

// reset price and slider 
btn.addEventListener('click', () => {
  originalPriceInput.value = '';
  document.querySelectorAll('.app-results span').forEach(span => {
    span.textContent = '0.00';
  });
  sliderOutput.value = 50;
  sliderRange.value = 50;
  sliderOutput.style.left = '50%'
});

// prevent letters
originalPriceInput.addEventListener('input', () => {
  if (isNaN(Number(originalPriceInput.value))) {
        originalPriceInput.value = '';
  }
});