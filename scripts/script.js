// input-bar-focused
// input-bar-selected
// radio-stroke-selected
//js-mort-amount  //error-amount
//js-mort-years  // error-years
//js-mort-interest //error-interest
//js-amount-parent
//js-years-parent
//js-interest-parent


const amountElem = document.querySelector(".js-mort-amount");
const yearsElem = document.querySelector(".js-mort-years");
const interestElem = document.querySelector(".js-mort-interest");

let amount = NaN;
let years = NaN;
let interest = NaN;

document.querySelector(".js-clear-all-button")
  .addEventListener("click", () => {
    clearAll();
  });


amountElem.addEventListener("focus", () => {
  manageFocus(".js-amount-parent", ".js-years-parent", ".js-interest-parent");
});

yearsElem.addEventListener("focus", () => {
  manageFocus(".js-years-parent", ".js-interest-parent", ".js-amount-parent");
});
interestElem.addEventListener("focus", () => {
  manageFocus(".js-interest-parent", ".js-amount-parent", ".js-years-parent");
});


amountElem.addEventListener("keydown", e => {
  handleKeyDown(yearsElem, '.error-amount', e);
});

yearsElem.addEventListener("keydown", e => {
  handleKeyDown(interestElem, '.error-years', e);
});

interestElem.addEventListener("keydown", e => {
  if(e.key === "Enter"){
    migrateToSelect();
  }
});

function handleKeyDown(nextInput, errorClass, e){
  if(e.key === 'Enter' || e.key === 'ArrowDown') {
    e.preventDefault();
    nextInput.focus();
  } else { //this doesn't work.
    let temp = Number(e.key);
    if(temp === NaN && e.key !== '.' && e.key !== ',') {
      wrongInputError(errorClass);
    }
  }
}


function manageFocus(addTo, removeFrom1, removeFrom2){
  document.querySelector(addTo)
    .classList.add("input-bar-focused");
  document.querySelector(removeFrom1)
    .classList.remove("input-bar-focused");
  document.querySelector(removeFrom2)
    .classList.remove("input-bar-focused");
}

function wrongInputError(className) {
  const errorElem = document.querySelector(className);
  errorElem.style.display = 'block';
  errorElem.innerText = "Wrong input type. only digit(0-9) & comma(,) are allowed.";
}

function clearAll(){
  amountElem.value = "";
  yearsElem.value = "";
  interestElem.value = "";
}