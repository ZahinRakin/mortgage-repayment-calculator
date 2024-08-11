// input-bar-focused
// input-bar-selected
// radio-stroke-selected
//js-mort-amount  //error-amount
//js-mort-years  // error-years
//js-mort-interest //error-interest
//js-amount-parent
//js-years-parent
//js-interest-parent
//js-repayment-bar        //js-repay-radio         //radio-selected
//js-interest-only-bar    //js-interest-only-radio
import { manageFocus, clearAll, handleKeyDown } from "./done.js";
import {amountElem, yearsElem, interestElem, repayElem, interestOnlyElem, submitButton, resElem} from './variables.js';

let amount = NaN;
let years = NaN;
let interest = NaN;


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

  amountElem.addEventListener("focus", () => {
    manageFocus(".js-amount-parent");
  });
  amountElem.focus(); //this is for startup.....

  yearsElem.addEventListener("focus", () => {
    manageFocus(".js-years-parent");
  });
  interestElem.addEventListener("focus", () => {
    manageFocus(".js-interest-parent");
  });
  //here the focus for the selection sec
  repayElem.addEventListener("focus", () => {
    manageFocus(".js-repayment-bar");
    console.log();
  });
  interestOnlyElem.addEventListener("focus", () => {
    manageFocus(".js-interest-only-bar");
  });
//-------------------------------------------------------//
  amountElem.addEventListener("keydown", e => {
    handleKeyDown(interestOnlyElem, yearsElem, e);
  });

  yearsElem.addEventListener("keydown", e => {
    handleKeyDown(amountElem, interestElem, e);
  });
  interestElem.addEventListener("keydown", e => {
    handleKeyDown(yearsElem, repayElem, e);
  });

  //selection section
  repayElem.addEventListener("keydown", e => {
    if(e.key === 'Enter'){                         //still under construction.
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

  //this needs to be last be
}

function pressSubmit(){                            //still remaining to get the selection input.
  let monthlyRepay = 234000;
  let totalToPay = 539322.94;
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
      <div class="render-monthly-amount">£${monthlyRepay.toFixed(2)}</div>
      <p>
        Total you'll repay over the term
        <div class="render-total">
          £${totalToPay.toFixed(2)}
        </div>
      </p>
    </div>
  `;
}

function checkInfo(){
  amount = Number.parseFloat(amountElem.value.replace(/,/g, ''));
  years = Number.parseFloat(yearsElem.value);
  interest = Number.parseFloat(interestElem.value); 

  if(!amount && !years && !interest){
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