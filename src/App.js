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

          <h1>Policy Analyzer</h1>

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


          <div className='parent'>
            {/* Grid */}
            <div className='child'>
              <b> <u>Grid</u> </b>
              {/* using San Diego kwh price */}
              <br />
              <mark >Bill amount:</mark> <b>${billGrid.toFixed(2)} </b> 
            </div>

            {/* Solar */}
            <div className='child'>
                {/* <b> <u>Solar</u> </b> */}

                <b> <u>Solar (under NEM 3.0)</u> </b>
                <br />
                <p3 >
                  Solar Credit: <b>${billSolar.toFixed(2)}</b> 
                </p3> 
                <br />
                <p3 >
                  Loan Payment: ~$150 <br />
                  Monthly fee: $15 <br />
                </p3>
                <mark>Total Bill (Estimate):</mark> <b>${totalBillSolar.toFixed(2)}</b>

                <div>
                  <marker>Switching to solar you will save </marker>
                  <b>${(billGrid - totalBillSolar).toFixed(2)}</b>
                </div>

            </div>

          </div>
        </header>
      </div>
    </main>
  );
}

export default App;
