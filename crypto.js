
let countryCode = {
    "AUD": "AU",
    "EUR": "Er",
    "JPY": "JP",
    "CHF": "CH",
    "USD": "US",
    "AFN": "AF",
    "ALL": "AL",
    "DZD": "DZ",
    "AOA": "AO",
    "ARS": "AR",
    "AMD": "AM",
    "AWG": "AM",
    "AUD": "AU",
    "ATS": "AT",
    "BEF": "Be",
    "AZN": "AZ",
    "BSD": "BS",
    "BHD": "BH",
    "BDT": "BD",
    "BBD": "BB",
    "BYR": "BY",
    "BZD": "BZ",
    "BMD": "BM",
    "BTN": "BT",
    "BOB": "BO",
    "BAM": "BA",
    "BWP": "BW",
    "BRL": "BR",
    "GBP": "GB",
    "BND": "BN",
    "BGN": "BG",
    "BIF": "BI",
    "XOF": "XO",
    "XAF": "XA",
    "XPF": "XP",
    "KHR": "KH",
    "CAD": "CA",
    "CVE": "CV",
    "KYD": "KY",
    "CLP": "CL",
    "CNY": "CN",
    "COP": "CO",
    "KMF": "KM",
    "CDF": "CD",
    "CRC": "CR",
    "HRK": "HR",
    "CUC": "CU",
    "CUP": "CP",
    "CYP": "CY",
    "CZK": "CZ",
    "DKK": "DK",
    "DJF": "DJ",
    "DOP": "DO",
    "XCD": "XC",
    "EGP": "EG",
    "SVC": "SV",
    "EEK": "EE",
    "ETB": "ET",
    "EUR": "EU",
    "FKP": "FK",
    "FIM": "FI",
    "FJD": "FJ",
    "GMD": "GM",
    "GEL": "GE",
    "DMK": "DM",
    "GHS": "GH",
    "GIP": "GI",
    "GRD": "GR",
    "GTQ": "GT",
    "GNF": "GN",
    "GYD": "GY",
    "HTG": "HT",
    "HNL": "HN",
    "HKD": "HK",
    "HUF": "HU",
    "ISK": "IS",
    "INR": "IN",
    "IDR": "ID",
    "IRR": "IR",
    "IQD": "IQ",
    "IED": "IE",
    "ILS": "IL",
    "ITL": "IT",
    "JMD": "JM",
    "JPY": "JP",
    "JOD": "JO",
    "KZT": "KZ",
    "KES": "KE",
    "KWD": "KW",
    "KGS": "KG",
    "LAK": "LA",
    "LVL": "LV",
    "LBP": "LB",
    "LSL": "LS",
    "LRD": "LR",
    "LYD": "LY",
    "LTL": "LT",
    "LUF": "LU",
    "MOP": "MO",
    "MKD": "MK",
    "MGA": "MG",
    "MWK": "MW",
    "MYR": "MY",
    "MVR": "MV",
    "MTL": "MT",
    "MRO": "MR",
    "MUR": "MU",
    "MXN": "MX",
    "MDL": "MD",
    "MNT": "MN",
    "MAD": "MA",
    "MZN": "MZ",
    "MMK": "MM",
    "ANG": "AN",
    "NAD": "NA",
    "NPR": "NP",
    "NLG": "NL",
    "NZD": "NZ",
    "NIO": "NI",
    "NGN": "NG",
    "KPW": "KP",
    "NOK": "NO",
    "OMR": "OM",
    "PKR": "PK",
    "PAB": "PA",
    "PGK": "PG",
    "PYG": "PY",
    "PEN": "PE",
    "PHP": "PH",
    "PLN": "PL",
    "PTE": "PT",
    "QAR": "QA",
    "RON": "RO",
    "RUB": "RU",
    "RWF": "RW",
    "WST": "WS",
    "STD": "ST",
    "SAR": "SA",
    "RSD": "RS",
    "SCR": "SC",
    "SLL": "SL",
    "SGD": "SG",
    "SKK": "SK",
    "SIT": "SI",
    "SBD": "SB",
    "ZAR": "ZA",
    "KRW": "KR",
    "ESP": "ES",
    "LKR": "LK",
    "SHP": "SH",
    "SDG": "SD",
    "SRD": "SR",
    "SZL": "SZ",
    "SEK": "SE",
    "CHF": "CH",
    "SYP": "SY",
    "TWD": "TW",
    "TZS": "TZ",
    "THB": "TH",
    "TOP": "TO",
    "TTD": "TT",
    "TND": "TN",
    "TRY": "TR",
    "TMM": "TM",
    "USD": "US",
    "UGX": "UG",
    "UAH": "UA",
    "UYU": "UY",
    "AED": "AE",
    "VUV": "VU",
    "VEB": "VE",
    "VND": "VN",
    "YER": "YE",
    "ZMK": "ZM",
    "ZWD": "ZW",
}
for(let i = 0; i < dropList.length; i++){
    for (currency_code in countryCode) {
        let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code == "NGN" ? "selected" : "";
        }
        let optionTag = `<option value="${currency_code}">${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
        
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target);
    });
}
function loadFlag(element){
    for(code in countryCode){
        if (code == element.value) {
              let imgTag = element.parentElement.querySelector("img");
              imgTag.src = `https://flagsapi.com/${countryCode[code]}/shiny/64.png`
        }
    }
}


function showCurrencyName() {
    var selectFromCurrency = document.getElementById("fromCurrency");
    var fromCurrencyName = selectFromCurrency.options[selectFromCurrency.selectedIndex].text;
    document.getElementById("fromCurrencyName").innerHTML = fromCurrencyName;
}

function showFromCurrencyName() {
    var selectCurrency = document.getElementById("toCurrency");
    var currencyName = selectCurrency.options[selectCurrency.selectedIndex].text;
    document.getElementById("currencyName").innerHTML = currencyName;
}

const amountInput = document.querySelector('#amount');
const fromCurrencySelect = document.querySelector('#fromCurrency');
const toCurrencySelect = document.querySelector('#toCurrency');
const convertButton = document.querySelector('#convert');
const resultParagraph = document.querySelector('#result');

convertButton.addEventListener('click', () => {
    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const apiKey = "685419b6bedfb725bb6af07ed3dd6fef8f20a83f05c066d1eb20a10c563c7801";
    const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${fromCurrency}&tsyms=${toCurrency}&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const rate = data[toCurrency];
            const result = amount / rate;

            resultParagraph.innerHTML = `${amount} ${toCurrency} is equal to ${result.toFixed(8)} ${fromCurrency}`;
        })
        .catch(error => {
            resultParagraph.innerHTML = "Error: Unable to fetch exchange rate.";
            console.error(error);
        });
});
