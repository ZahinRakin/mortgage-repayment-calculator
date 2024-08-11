// input-bar-focused
// input-bar-selected
// radio-stroke-selected
//js-mort-amount  //error-amount
//js-mort-years  // error-years
//js-mort-interest //error-interest
//js-amount-parent
//js-years-parent
//js-interest-parent
//js-repayment-bar        //js-repay-radio
//js-interest-only-bar    //js-interest-only-radio
import { manageFocus, clearAll, handleKeyDown } from "./done.js";
import {amountElem, yearsElem, interestElem, repayElem, interestOnlyElem} from './variables.js';

eventListeners(); 

function eventListeners() {
  document.querySelector(".js-clear-all-button")
  .addEventListener("click", () => {
    clearAll();
  });

  amountElem.addEventListener("focus", () => {
    manageFocus(".js-amount-parent");
  });

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
    if(e.key === 'Enter'){
      e.preventDefault();
      console.log('selecting is the only thing that is remaining.');        //tesing.
      amountElem.focus();
    } else {
      handleKeyDown(interestElem, interestOnlyElem, e);
    }
  });
  
  interestOnlyElem.addEventListener("keydown", e => {
    if(e.key === 'Enter') {
      e.preventDefault();
      console.log('selecting is the only thing that is remaining.');        //tesing.
      amountElem.focus();
    } else {
      handleKeyDown(repayElem, amountElem, e);
    }
  });

  //this needs to be last be
}

function submit(){
  console.log("hello I am from submit..");
}