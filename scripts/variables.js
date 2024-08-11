export const amountElem = document.querySelector(".js-mort-amount");
export const yearsElem = document.querySelector(".js-mort-years");
export const interestElem = document.querySelector(".js-mort-interest");
//selection section.
export const repayElem = document.querySelector(".js-repayment-bar");
export const interestOnlyElem = document.querySelector(".js-interest-only-bar");
export const submitButton = document.querySelector(".js-submit-button");
export const emptyResHTML = `
  <div class="empty-img-holder">
    <img src="../assets/images/illustration-empty.svg" alt="illustration empty" class="empty-img">
  </div>
  <h2>
    Results shown here
  </h2>
  <p class="guidelines">
    Complete the form and click “calculate repayments” to see what
    your monthly repayments would be.
  </p>
`;