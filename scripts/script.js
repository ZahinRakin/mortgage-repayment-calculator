import { manageFocus, clearAll, handleKeyDown } from "./done.js";
import {amountElem, yearsElem, interestElem, repayElem, interestOnlyElem, submitButton, resElem} from './variables.js';

let amount = NaN;
let years = NaN;
let interest = NaN;
let mortgageType = '';


eventListeners(); 

function eventListeners() {
  document.querySelector(".js-clear-all-button")
  .addEventListener("click", e => {
    e.preventDefault();
    clearAll();
  });

  submitButton.addEventListener("click", e => {
    e.preventDefault();
    console.log("submit button have been pressed.");
    if(checkInfo()){
      pressSubmit();
    }
  });
  //focus event listener
  amountElem.addEventListener("focus", () => {
    manageFocus(".js-amount-parent");
  });
  amountElem.focus();

  yearsElem.addEventListener("focus", () => {
    manageFocus(".js-years-parent");
  });
  interestElem.addEventListener("focus", () => {
    manageFocus(".js-interest-parent");
  });
  repayElem.addEventListener("focus", () => {
    manageFocus(".js-repayment-bar");
    console.log();
  });
  interestOnlyElem.addEventListener("focus", () => {
    manageFocus(".js-interest-only-bar");
  });
  //keydown event listener
  amountElem.addEventListener("keydown", e => {
    handleKeyDown(interestOnlyElem, yearsElem, e);
  });
  yearsElem.addEventListener("keydown", e => {
    handleKeyDown(amountElem, interestElem, e);
  });
  interestElem.addEventListener("keydown", e => {
    handleKeyDown(yearsElem, repayElem, e);
  });
  repayElem.addEventListener("keydown", e => {
    if(e.key === 'Enter'){                         //still under construction.
      document.querySelector("#repay-radio").checked = true;
      e.preventDefault();
      selectRadio(".js-repay-radio");
      if(checkInfo()){
        pressSubmit();
      }
      amountElem.focus();
    } else {
      handleKeyDown(interestElem, interestOnlyElem, e);
    }
  });
  interestOnlyElem.addEventListener("keydown", e => {
    if(e.key === 'Enter') {                        //still under construction.
      document.querySelector("#interest-only-radio").checked = true;
      e.preventDefault();
      selectRadio(".js-interest-only-radio");
      if(checkInfo()){
        pressSubmit();
      }
      amountElem.focus();
    } else {
      handleKeyDown(repayElem, amountElem, e);
    }
  });
  //click event listener
  repayElem.addEventListener("click", () => {
    selectRadio(".js-repay-radio");
  });
  interestOnlyElem.addEventListener("click", () => {
    selectRadio(".js-interest-only-radio");
  });
}

function pressSubmit(){
  const paymentObj = calcPayment();
  resElem.style.textAlign = 'start';
  resElem.innerHTML = `
    <h2>
      Your results
    </h2>
    <p>
      Your results are shown below based on the information you provided.
      To adjust the results, edit the form and click “calculate repayments” again.
    </p>
    <div class="yellow-stripe"></div>
    <div class="render-place">
      <p>
        Your monthly repayments
      </p>
      <div class="render-monthly-amount">£${paymentObj.monthlyPayment}</div>
      <p>
        Total you'll repay over the term
        <div class="render-total">
          £${paymentObj.totalPayment}
        </div>
      </p>
    </div>
  `;
}

function checkInfo(){
  amount = Number.parseFloat(amountElem.value.replace(/,/g, ''));
  years = Number.parseFloat(yearsElem.value);
  interest = Number.parseFloat(interestElem.value);
  mortgageType = document.querySelector(`[name="mortgage-type"]:checked`).value;
  console.log(amount, years, interest, mortgageType);

  if(isNaN(amount) || isNaN(years) || isNaN(interest) || !mortgageType){
    document.querySelectorAll('.error-message').forEach(elem => {
      elem.style.display = "block";
    });
    return false;
  } else {
    document.querySelectorAll('.error-message').forEach(elem => {
      elem.style.display = "none";
    }); 
    return true; 
  }
}

function selectRadio(classSelector){
  document.querySelectorAll(".radio-selected").forEach(element => {
    element.classList.remove('radio-selected');
  });
  const elem = document.querySelector(classSelector).classList;
  if(!elem.contains("radio-selected")) {
    elem.add('radio-selected');
  } else {
    elem.remove('radio-selected')
  } 
}

function calcPayment() {
  let P = amount;
  let r = (interest / 100) / 12; // Monthly interest rate
  let n = years * 12; // Total number of payments (months)
  let M = NaN;
  let total = NaN;

  if (mortgageType === 'repayment') {
    let temp = Math.pow(1 + r, n);
    M = (P * r * temp) / (temp - 1);
    total = M * n; // Total payment for repayment mortgage
  } else {
    M = P * r; // Interest-only monthly payment
    total = (M * n) + P; // Total payment for interest-only mortgage
  }

  const formatter = new Intl.NumberFormat('en-US', { 
    style: 'decimal', 
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2 
  });
  
  let formattedMonthlyPayment = formatter.format(M);
  let formattedTotalPayment = formatter.format(total);

  return {
    monthlyPayment: formattedMonthlyPayment,
    totalPayment: formattedTotalPayment
  };
}

