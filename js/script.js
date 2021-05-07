{
    const welcome = () => {
        console.log("Hello🙂");
    };
    welcome();

    const calculateResult = (amount, expectedCurrency) => {
        const eurRateElement = document.querySelector(".js-eurRate");
        const usdRateElement = document.querySelector(".js-usdRate");
        switch (amount, expectedCurrency) {
            case "EUR":
                return amount / eurRateElement.value;
            case "USD":
                return amount / usdRateElement.value;
        };
    };

    const updateResultText = (amount, result, expectedCurrency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong> ${result.toFixed(2)} ${expectedCurrency}</strong>`
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const expectedCurrencyElement = document.querySelector(".js-expectedCurrency");
        const amountElement = document.querySelector(".js-amount");
        const expectedCurrency = expectedCurrencyElement.value;
        const amount = +amountElement.value;
        const result = calculateResult(amount, expectedCurrency);
        updateResultText(amount, result, expectedCurrency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}

