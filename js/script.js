console.log("Hello🙂");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let expectedCurrencyElement = document.querySelector(".js-expectedCurrency");
let resultElement = document.querySelector(".js-result");
let eurRateElement = document.querySelector(".js-eurRate");
let usdRateElement = document.querySelector(".js-usdRate");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let eurRate = eurRateElement.value;
    let usdRate = usdRateElement.value;
    let expectedCurrency = expectedCurrencyElement.value;

    let result;

    switch (expectedCurrency) {
        case "EUR":
            (result = amount / eurRate)
            break;
        case "USD":
            (result = amount / usdRate)
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${expectedCurrency}</strong>`
});





