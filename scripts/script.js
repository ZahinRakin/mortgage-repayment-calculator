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
    handleKeyDown(interestElem, yearsElem, e);
  });

  yearsElem.addEventListener("keydown", e => {
    handleKeyDown(amountElem, interestElem, e);
  });
  interestElem.addEventListener("keydown", e => {
    if(e.key === 'Enter'){
      console.log('i am encountering enter after interest only.');                //this is also printing
      e.preventDefault();
      console.log(repayElem);                                                      //this is pringting value
      repayElem.focus();                                           //here coming
    } else {
      handleKeyDown(yearsElem, amountElem, e);
    }
  });

  //selection section
  repayElem.addEventListener("keydown", e => {
    selHandleKeyDown(interestOnlyElem, e);  //this is also executing.
  });
  
  interestOnlyElem.addEventListener("keydown", e => {
    selHandleKeyDown(repayElem, e);
  });

  //this needs to be last be
}

function selHandleKeyDown(nextInput, e) {
  if(e.key === 'Enter') {
    e.preventDefault();
    submit();                                //unfinished....
  } else if(e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault();
    nextInput.focus();
  }
}

function submit(){
  console.log("hello I am from submit..");
}