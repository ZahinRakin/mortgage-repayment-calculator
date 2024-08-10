// input-bar-focused
// input-bar-selected
// radio-stroke-selected
//js-mort-amount  //error-amount
//js-mort-years  // error-years
//js-mort-interest //error-interest
//js-amount-parent
//js-years-parent
//js-interest-parent
//js-repayment-bar
//js-interest-only-bar


const amountElem = document.querySelector(".js-mort-amount");
const yearsElem = document.querySelector(".js-mort-years");
const interestElem = document.querySelector(".js-mort-interest");
//selection section.
const repayElem = document.querySelector(".js-repayment-bar");
const interestOnlyElem = document.querySelector(".js-interest-only-bar");

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
//selection section.
repayElem.addEventListener("focus", () => {
  manageFocus(".js-repayment-bar", ".js-interest-parent", ".js-interest-only-bar");
});
interestOnlyElem.addEventListener("focus", () => {
  manageFocus(".js-interest-only-bar", ".js-repayment-bar", ".js-interest-parent");
});


amountElem.addEventListener("keydown", e => {
  handleKeyDown(interestElem, yearsElem, e);
});

yearsElem.addEventListener("keydown", e => {
  handleKeyDown(amountElem, interestElem, e);
});

interestElem.addEventListener("keydown", e => {
  e.key === 'Enter' ? migrateToSelect() : handleKeyDown(yearsElem, amountElem, e);
});

function migrateToSelect(){               // unfinished....
  console.log("hellow world.");
}

repayElem.addEventListener("keyDown", e => {
  selHandleKeyDown(interestOnlyElem, e);
});

interestOnlyElem.addEventListener("keyDown", e => {
  selHandleKeyDown(repayElem, e);
});

function selHandleKeyDown(nextInput, e) {
  if(e.key === 'Enter') {
    e.preventDefault();
    submit();                                //unfinished....
  } else if(e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    
  }
}



function handleKeyDown(previousInput, nextInput, e){
  if(e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    e.preventDefault();
    nextInput.focus();
  } else if(e.key === 'ArrowUp' || e.key === 'ArrowLeft') { 
    e.preventDefault();
    previousInput.focus();
  }
}


function manageFocus(addTo, removeFrom1, removeFrom2){
  document.querySelector('.input-bar-focused').classList.remove('.input-bar-focused'); //this line is added.
  document.querySelector(addTo)
    .classList.add("input-bar-focused");
  document.querySelector(removeFrom1)
    .classList.remove("input-bar-focused");
  document.querySelector(removeFrom2)
    .classList.remove("input-bar-focused");
}

function clearAll(){
  amountElem.value = "";
  yearsElem.value = "";
  interestElem.value = "";
}