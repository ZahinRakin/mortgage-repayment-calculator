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
import { manageFocus, clearAll, handleKeyDown } from "./done";
import {amountElem, yearsElem, interestElem, repayElem, interestOnlyElem} from './variables';


eventListeners(); 

//selection section.
repayElem.addEventListener("focus", () => {
  manageFocus(".js-repayment-bar");
});
interestOnlyElem.addEventListener("focus", () => {
  manageFocus(".js-interest-only-bar");
});
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
    e.preventDefault();
    nextInput.focus();
  }
}






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


  amountElem.addEventListener("keydown", e => {
    handleKeyDown(interestElem, yearsElem, e);
  });

  yearsElem.addEventListener("keydown", e => {
    handleKeyDown(amountElem, interestElem, e);
  });

  interestElem.addEventListener("keydown", e => {                                  //unfinished.....
    e.key === 'Enter' ? repayElem.focus() : handleKeyDown(yearsElem, amountElem, e);
  });
}