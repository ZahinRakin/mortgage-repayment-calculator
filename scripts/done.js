import {amountElem, yearsElem, interestElem, repayElem, interestOnlyElem} from './variables.js';


export function manageFocus(addTo){
  document.querySelectorAll('.input-bar-focused').forEach(elem => {
    elem.classList.remove('input-bar-focused'); //this line is added.
  });
  document.querySelector(addTo)
    .classList.add("input-bar-focused");
}

export function clearAll(){
  amountElem.value = "";
  yearsElem.value = "";
  interestElem.value = "";
}

export function handleKeyDown(previousInput, nextInput, e){
  if(e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowRight') {
    e.preventDefault();
    nextInput.focus();
  } else if(e.key === 'ArrowUp' || e.key === 'ArrowLeft') { 
    e.preventDefault();
    previousInput.focus();
  }
}