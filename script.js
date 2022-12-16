const originalPriceInput = document.getElementById("originalPriceInput");
const discountPrecentageInput = document.getElementById("discountPrecentageInput");
const finalPrices = document.getElementById("finalPrices");

// calculate discount
const calculateDiscount = () => {
  const originalPrice = originalPriceInput.value;

  const discountPrecentage = discountPrecentageInput.value / 100;

  const savings = originalPrice * discountPrecentage;

  const finalPrice = originalPrice - savings;

  console.log({ finalPrice: finalPrice, yourSavings: savings });

  finalPrices.innerHTML = `
    <h2>Final price is ${finalPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</h2>
    <p>Your savings will be ${savings.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,})}</p>
   `;
};
