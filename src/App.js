import './App.css';
import React, { useState } from 'react';



function App() {
  let [billSolar, setSolar] = React.useState(0)
  let [totalBillSolar, setTotalBillSolar] = React.useState(0)

  const handleSolar = (event) => {
    //check if its a real #
    let solarCredit = parseFloat(event.target.value);
    if(!isNaN(solarCredit)){
      setSolar(solarCredit * .08);
      setTotalBillSolar(150 + 15 - (solarCredit * .08))
    } else {
      setSolar(0);
      setTotalBillSolar(0)
    }
    

    // setSolar(solarCredit * .08);
    // setTotalBillSolar(150 + 15 - (solarCredit * .08))
  }

  let [billGrid, setBill] = React.useState(0);
  let handleGrid = (event) => {
    let kwhUsed = parseFloat(event.target.value);
    if(!isNaN(kwhUsed)){
      setBill(kwhUsed * .37)
    } else {
      kwhUsed = 0;
    }
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

          <br />

          <div>
            <u>Grid</u>
            {/* using San Diego kwh price */}
            <p>Bill amount: ${billGrid.toFixed(2)} </p>
          </div>

          <div>
          <p><u>Solar (under NEM 3.0)</u></p>

            <p3 >
              Solar Credit: ${billSolar.toFixed(2)}
            </p3> <br />

            <p3 >
            {/* average loan is between 50-250 so we will say 150 */}
              Loan Payment: ~$150 <br />
              Monthly fee: $15 <br />
            </p3>
            Total Bill (Estimate): ${totalBillSolar.toFixed(2)}
          </div>

          <br />


          <div>
            Switching to solar you will save ${(billGrid - totalBillSolar).toFixed(2)}
            {/* Switching to solar you will save ${(totalBillSolar - billGrid).toFixed(2)} */}
          </div>

        </header>
      </div>
    </main>
  );
}

export default App;
