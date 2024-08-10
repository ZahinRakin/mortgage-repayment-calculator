// input-bar-focused
// input-bar-selected
// radio-stroke-selected

getMortAmount();
getMortYears();
getMortInterest();

function getMortAmount(){
  const mortInputElem = document.querySelector(".js-mort-amount");
  mortInputElem.addEventListener("keydown", event => {
    console.log(event);
    if(event.key === "Enter") {
      getMortYears();
    }
  });
}

function getMortYears(){
  const yearsInputElem = document.querySelector(".js-mort-years");

  yearsInputElem.addEventListener("keydown", event => {
    console.log(event);
    if(event.key === "Enter") {
      getMortInterest();
    }
  });
}

function getMortInterest(){
  const interestInputElem = document.querySelector(".js-mort-interest");

  interestInputElem.addEventListener("keydown", event => {
    console.log(event);
  });
}
