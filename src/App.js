import React, { useState } from 'react';
import './App.css';

function App() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate) / 12 / 100;
    const T = parseFloat(time) * 12;

    const emi = (P * R * Math.pow(1 + R, T)) / (Math.pow(1 + R, T) - 1);
    setEmi(emi.toFixed(2));
  };

  return (
    <div className="App">
      <h1>EMI Calculator</h1>
      <div className="calculator">
        <div className="input-group">
          <label>Principal Amount (₹):</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal amount"
          />
        </div>
        <div className="input-group">
          <label>Annual Interest Rate (%):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>
        <div className="input-group">
          <label>Loan Tenure (Years):</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter tenure in years"
          />
        </div>
        <button onClick={calculateEMI}>Calculate EMI</button>
        {emi && (
          <div className="result">
            <h2>Monthly EMI: ₹{emi}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
