// src/App.js

import React, { useState } from 'react';
import './App.css';
import InputField from './component/InputField';
import Button from './component/Button';
import Slider from './component/Slider';

function App() {
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(10);
  const [time, setTime] = useState(5);
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = principal;
    const r = interestRate / 12 / 100; // Monthly interest rate
    const n = time * 12; // Number of months

    const emiCalc = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmi(emiCalc.toFixed(2));
  };

  return (
    <div className="App">
      <h1>EMI Calculator</h1>
      
      <InputField
        label="Loan Amount (Principal)"
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(Number(e.target.value))}
      />
      
      <Slider
        label="Interest Rate (%)"
        min="1"
        max="20"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
      />
      
      <Slider
        label="Time (Years)"
        min="1"
        max="30"
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
      />
      
      <Button text="Calculate EMI" onClick={calculateEMI} />
      
      {emi && (
        <div className="result">
          <h2>Your EMI: ₹ {emi}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
