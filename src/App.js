import './App.css';
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage();
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated("CurrentBill");
  };

  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {
    //       <h>Policy Analyzer</h>
    //     }
    //     <div>
    //       <body>
    //         <input 
    //           type="number" 
    //           placeholder='Current Bill Amount'
    //           id='CurrentBill'
    //           onChange={handleChange}
    //           value={message}
    //         />
    //         <button 
    //           id='currentBillBTN' 
    //           onClick={handleClick}>
    //           Submit
    //         </button>
    //       </body>
    //     </div>
    //   </header>
    // </div>
    <main>
      <div className="App">
        <header className="App-header">
          {
            <h>Policy Analyzer</h>
          }
          <div>
            <body>
              <input
                type="number"
                placeholder='Current Bill Amount'
                id='CurrentBill'
                onChange={handleChange}
                value={message}
              />
              <button
                id='currentBillBTN'
                onClick={handleClick}>
                Submit
              </button>
            </body>
          </div>
        </header>
      </div>
    </main>
  );
}

export default App;
