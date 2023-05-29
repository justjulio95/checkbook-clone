import React from "react";

function GenInfo() {
  return(
    <section>
      <div className="d-flex justify-content-center">
        <h2>Personal Account</h2>
      </div>

      <div className="d-flex justify-content-around">
        {/* hardcoded balance */}
        <h4>Current Balance: $2400</h4>
      </div>
    </section>
  )
}

export default GenInfo;