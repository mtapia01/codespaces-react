import './App.css';
import React, { useState } from 'react';



function App() {
  let [billSolar, setSolar] = React.useState(0)
  let [totalBill, setTotalBill] = React.useState(165)

  const handleSolar = (event) => {
    let solarCredit = parseFloat(event.target.value);

    setSolar(solarCredit * .08);
    setTotalBill(150 + 15 - solarCredit)
  }

  

  let [bill, setBill] = React.useState(0)
  let handleGrid = (event) => {
    let kwhUsed = parseFloat(event.target.value);

    setBill(kwhUsed * .37)
    // console.log(setBill(kwhUsed * .37))
  };


  return (
    <main>
      <div className="App">
        <header className="App-header">
          <h>Policy Analyzer</h>
          <div>
            <input
              type="number"
              onChange={handleGrid}
              placeholder='kWh Used (month)'>
            </input>
            <input
              type='number'
              let onChange={handleSolar}
              placeholder='# of Hrs Away (month)'>
            </input>
            
          </div>
          <div>
            <u>Grid</u>
            {/* using San Diego kwh price */}
            <p>Bill amount: ${bill.toFixed(2)} </p>
          </div>
          <div>
            <u>Solar (under NEM 3.0)</u>
            <p>Solar Credit: ${billSolar.toFixed(2)} </p> <br />
            {/* average loan is between 50-250 so will say 150 */}
            Loan Payment: ~$150 <br />
            Monthly fee: $15 <br />

            Total Bill (Estimate): ${totalBill.toFixed(2)}
          </div>
          <div>
          </div>
        </header>
      </div>
    </main>
  );
}

export default App;
