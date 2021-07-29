const currencyElement_one = document.querySelector("#currency-one");
const currencyElement_two = document.querySelector("#currency-two");
const amountElement_one = document.querySelector("#amount-1");
const amountElement_two = document.querySelector("#amount-2");

const rateElement = document.querySelector("#rate");

function calculate() {
  const currency_one = currencyElement_one.value;
  const currency_two = currencyElement_two.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currency_two];
      rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountElement_two.value = (amountElement_one.value * rate).toFixed(2);
    });
}

currencyElement_one.addEventListener("change", calculate);
currencyElement_two.addEventListener("change", calculate);
amountElement_one.addEventListener("input", calculate);
amountElement_two.addEventListener("input", calculate);

calculate();
