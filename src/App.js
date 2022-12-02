import './App.css';
import React,{useState} from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import * as math from "mathjs"

function App() {
  const [input, setInput] = useState("0")
  function changeValue(value) {
    setInput(input + value) 
   }
   function changeValuetoclear(value) {
    if (value === "clear") {
      setInput("") 
    }
   } 
   function sumthevalue(value) {
    if (value === "=") {
      setInput(math.evaluate(input)) 
    }
   }
  return (
   <div className='app'>
    <div className='calc-wrapper'>
      <Input input={input}/>
      <div className='row'>
        <Button changeValue={changeValue}>7</Button>
        <Button changeValue={changeValue}>8</Button>
        <Button changeValue={changeValue}>9</Button>
        <Button changeValue={changeValue}>/</Button>
      </div>
      <div className='row'>
        <Button changeValue={changeValue}>4</Button>
        <Button changeValue={changeValue}>5</Button>
        <Button changeValue={changeValue}>6</Button>
        <Button changeValue={changeValue}>*</Button>
      </div>
      <div className='row'>
        <Button changeValue={changeValue}>1</Button>
        <Button changeValue={changeValue}>2</Button>
        <Button changeValue={changeValue}>3</Button>
        <Button changeValue={changeValue}>+</Button>
      </div>
      <div className='row'>
        <Button changeValue={changeValue}>0</Button>
        <Button changeValue={changeValue}>.</Button>
        <Button sumthevalue={sumthevalue}>=</Button>
        <Button changeValue={changeValue}>-</Button>
      </div>
      <div className='row'>
        <ClearButton changeValuetoclear={changeValuetoclear}>Clear</ClearButton>
      </div>
    </div>
   </div>
  );
}

export default App;
