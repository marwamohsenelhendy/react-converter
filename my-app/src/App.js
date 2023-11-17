import { useState } from 'react';
import './App.css';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const inches = parseFloat(inputValue);
    if (!isNaN(inches)) {
      const meter = inches * 0.0254;
      setResult(`${inches} inches = ${meter} meter`);
    }
  };

  return (
    <div className="converter-body">
      <h1>inch-to-meter converter</h1>
      <p>Number of inches:</p>
      <div className="container">
        <input
          type="text"
          placeholder="Enter number of inches here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input-text"
        />
        <button className="calc-btn" onClick={calculate}>
          Calculate
        </button>
      </div>
      <div className="converter-head">{result}</div>
    </div>
  );
}

export default App