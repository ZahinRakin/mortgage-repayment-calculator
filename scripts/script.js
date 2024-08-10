// input-bar-focused
// input-bar-selected
// radio-stroke-selected

let mortAmount = 0;
let mortYears = 0;
let mortInterest = 0;

getMortAmount();

function getMortAmount() {
  const mortInputElem = document.querySelector(".js-mort-amount");

  mortInputElem.focus();
  manageFocus(".js-years-parent", ".js-interest-parent", ".js-amount-parent");

  mortInputElem.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault(); // to prevent default form submission.
      mortAmount = mortInputElem.value;
      mortAmount = Number.parseInt(mortAmount.replace(/,/g, ''), 10);
      console.log(mortAmount);
      getMortYears(); // Call the next function
    }
  });
}

function getMortYears() {
  const yearsInputElem = document.querySelector(".js-mort-years");

  yearsInputElem.focus();
  manageFocus(".js-amount-parent", ".js-interest-parent", ".js-years-parent");

  yearsInputElem.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      event.preventDefault(); // to prevent default form submission.
      mortYears = yearsInputElem.value;
      mortYears = Number.parseInt(mortYears, 10);
      getMortInterest(); // Call the next function
    }
  });
}

function getMortInterest() {
  const interestInputElem = document.querySelector(".js-mort-interest");

  interestInputElem.focus();
  manageFocus(".js-years-parent", ".js-interest-parent", ".js-amount-parent");

  interestInputElem.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      // You can add more functionality here if needed
    }
  });
}

function manageFocus(rmFrom1, rmFrom2, addClass){
  if(document.querySelector("rmFrom1").classList.contains("input-bar-focused")){
    document.querySelector("rmFrom1").classList.remove("input-bar-focused")
  }
  if(document.querySelector("rmFrom2").classList.contains("input-bar-focused")){
    document.querySelector("rmFrom2").classList.remove("input-bar-focused")
  }
  if(!document.querySelector("addTo").classList.contains("input-bar-focused")){
    document.querySelector("addTo").classList.add("input-bar-focused")
  }
}