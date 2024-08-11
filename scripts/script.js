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
import {amountElem, yearsElem, interestElem, repayElem, interestOnlyElem, submitButton, amount, years, interest} from './variables.js';

eventListeners(); 

function eventListeners() {
  document.querySelector(".js-clear-all-button")
  .addEventListener("click", () => {
    clearAll();
  });

  submitButton.addEventListener("click", e => {
    e.preventDefault();
    console.log("submit button have been pressed.");
    checkInfo();
    pressSubmit();
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
    if(e.key === 'Enter'){
      e.preventDefault();
                                                        //under construction
      selectRadio(".js-repay-radio");
      checkInfo();
      pressSubmit();
      amountElem.focus();
    } else {
      handleKeyDown(interestElem, interestOnlyElem, e);
    }
  });
  
  interestOnlyElem.addEventListener("keydown", e => {
    if(e.key === 'Enter') {
      e.preventDefault();
                                                        //under construction
      selectRadio(".js-interest-only-radio");
      checkInfo();
      pressSubmit();
      amountElem.focus();
    } else {
      handleKeyDown(repayElem, amountElem, e);
    }
  });

  //this needs to be last be
}

function pressSubmit(){
  console.log("hello I am from submit..");
}

function checkInfo(){
  console.log("inside checkInfo");


  amount = Number.parseFloat(amountElem.value.replace(/,/g, ''));
  years = Number.parseFloat(yearsElem.value);
  interest = Number.parseFloat(interestElem.value); 

  console.log(amount, years, interest);

  if(amount === NaN || years === NaN || interest === NaN){
    document.querySelectorAll('.error-message').forEach(elem => {
      elem.style.display = "block";
    });
  } else {
    document.querySelectorAll('.error-message').forEach(elem => {
      elem.style.display = "none";
    });  
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