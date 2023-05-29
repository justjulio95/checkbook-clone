import React from "react";

function Input() {
  return(
    <form id="money-track-form">
      <div>
        <label htmlFor="payee">Payee: </label>
        <input type="text" name="payee" id="payee" defaultValue="payee"/>
      </div>
      <div>
        <label htmlFor="dollar-amount">Dollar Amount</label>
        <input type="number" name="dollar-amount" id="dollar-amount" defaultValue="100"/>
      </div>
    </form>
  )
}

export default Input;